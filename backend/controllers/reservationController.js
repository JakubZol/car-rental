const Car = require('../models/Car');
const Reservation = require('../models/Reservation');
const User = require('../models/User');
const { RESPONSE_MESSAGES } = require('../consts');

const getReservationData = async (reservation, fetchUser = false) => {
    const { car_id, user_id, ...reservationDetails } = reservation;

    const car = await Car.findOne({ _id: car_id });
    const fullReservation = { car, ...reservationDetails };

    if (fetchUser) {
        const { _doc: { password, ...user } } = await User.findOne({_id: user_id });
        fullReservation.user = user
    }

    return fullReservation;
};

module.exports.getReservations = async (req, res) => {
    try {
        const { isAdmin } = await User.findOne({ _id: res.locals.userId });
        const queryFilters = isAdmin ? {} : { user_id: res.locals.userId };
        const reservations = await Reservation.find(queryFilters);

        res.status(200).json(await Promise.all(reservations.map(async reservation => await getReservationData(reservation._doc, isAdmin))));
    }
    catch(error) {
        res.status(400).json(error);
    }
};

module.exports.createReservation = async (req, res) => {
    const { from, to, car_id } = req.body;

    try {
        const { _doc } = await Reservation.create({ from, to, car_id, user_id: res.locals.userId });
        const reservation = await getReservationData(_doc, true);

        res.status(201).json(reservation);
    }
    catch(error) {
        res.status(400).json(error);
    }
};

module.exports.modifyReservation = async (req, res) => {
    const { _id, ...reservationData } = req.body;

    try {
        const reservation = await Reservation.findOne({ _id });
        const { isAdmin } = await User.findOne({ _id: res.locals.userId });

        if (reservation.active && (isAdmin || reservation.from > new Date())) {
            Object.keys(reservationData).forEach(key => {
                if (reservation[key] !== undefined) {
                    reservation[key] = reservationData[key];
                }
            });
            await reservation.save();

            res.status(200).json(await getReservationData(reservation._doc, true));
        }
        else {
            res.status(403).json({ error: RESPONSE_MESSAGES.ACCESS_DENIED });
        }
    }
    catch(error){
        res.status(400).json(error);
    }
};
