const Car = require('../models/Car');
const { RESPONSE_MESSAGES } = require('../consts');

module.exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    }
    catch(error) {
        res.status(400).json(error);
    }
};

module.exports.addCar = async (req, res) => {
    const { brand, model, price, quantity } = req.body;

    try {
        const { _doc } = await Car.create({brand, model, price, quantity: quantity || 1});
        res.status(201).json(_doc);
    }
    catch(error){
        res.status(400).json(error);
    }
};

module.exports.deleteCar = async (req, res) => {
    try {
        await Car.deleteOne({ _id: req.body._id });
        res.status(204).json({ message: RESPONSE_MESSAGES.RESOURCE_DELETED });
    }
    catch(error) {
        res.status(400).json(error);
    }
};

module.exports.modifyCar = async (req, res) => {
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
    catch(error) {
        res.status(400).json(error);
    }
};
