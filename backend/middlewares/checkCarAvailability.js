const Car = require('../models/Car');
const Reservation = require('../models/Reservation');
const { RESPONSE_MESSAGES } = require('../consts');


const checkCarAvailability = async (req, res, next) => {
    const carId = req.query.carId || req.body.carId;
    const from = req.query.from || req.body.from;
    const to = req.query.to || req.body.to;

    try {
        const { quantity } = await Car.findOne({ _id: carId });
        const reservations = await Reservation.find({
            $and: [
                { car_id: carId },
                { active: true },
                { $or: [{ to: { $gte: from, $lte: to } }, { from: { $lte: to, $gte: from } }] },
            ]
        });

        res.locals.carAvailable = reservations.length < quantity;
        next();
    }
    catch(error) {
        console.log(error);
        res.status(400).json({ error: RESPONSE_MESSAGES.BAD_REQUEST });
    }
};

module.exports = checkCarAvailability;
