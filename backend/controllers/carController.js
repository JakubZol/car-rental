const Car = require('../models/Car');
const Reservation = require('../models/Reservation');
const { RESPONSE_MESSAGES } = require('../consts');

module.exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    }
    catch {
        res.status(400).json({ error: RESPONSE_MESSAGES.BAD_REQUEST });
    }
};

module.exports.createCar = async (req, res) => {
    const { brand, model, price, quantity } = req.body;

    try {
        const { _doc } = await Car.create({brand, model, price, quantity: quantity || 1});
        res.status(201).json(_doc);
    }
    catch({ errors }){
        const errorMessages = Object.values(errors).map(({ message }) => message);
        res.status(400).json({ error: errorMessages });
    }
};

module.exports.deleteCar = async (req, res) => {
    try {
        await Car.deleteOne({ _id: req.body.carId });
        await Reservation.deleteMany({ car_id: req.body.carId });
        res.status(204).json({ message: RESPONSE_MESSAGES.RESOURCE_DELETED });
    }
    catch {
        res.status(400).json({ error: RESPONSE_MESSAGES.BAD_REQUEST });
    }
};

module.exports.updateCar = async (req, res) => {
    const { _id, ...carData } = req.body;

    try {
        const car = await Car.findOne({ _id });
        Object.keys(carData).forEach(key => {
            if (car[key]) {
                car[key] = carData[key];
            }
        });
        await car.save();

        res.status(200).json(car);
    }
    catch {
        res.status(400).json({ error: RESPONSE_MESSAGES.BAD_REQUEST });
    }
};

module.exports.checkCarAvailability = async (req, res) => {
    res.status(200).json({ available: res.locals.carAvailable });
};
