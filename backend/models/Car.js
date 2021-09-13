const mongoose = require('mongoose');
const { VALIDATION_MESSAGES } = require('../consts');

const carModel = mongoose.Schema({
    brand: {
        type: String,
        required: [true, VALIDATION_MESSAGES.CAR.BRAND_REQUIRED]
    },
    model: {
        type: String,
        required: [true, VALIDATION_MESSAGES.CAR.MODEL_REQUIRED]
    },
    price: {
        type: Number,
        required: [true, VALIDATION_MESSAGES.CAR.PRICE_REQUIRED]
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const Car = mongoose.model('car', carModel);

module.exports = Car;
