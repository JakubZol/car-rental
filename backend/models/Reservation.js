const mongoose = require('mongoose');
const { isDate } = require('validator');
const { VALIDATION_MESSAGES } = require('../consts');

const reservationModel = mongoose.Schema({
    car_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: false,
        default: true,
    },
    from: {
        type: Date,
        required: [true, VALIDATION_MESSAGES.RESERVATION.BEGIN_DATE_REQUIRED],
        validate: [isDate, VALIDATION_MESSAGES.RESERVATION.WRONG_DATE_FORMAT]
    },
    to: {
        type: Date,
        required: [true, VALIDATION_MESSAGES.RESERVATION.EXPIRATION_DATE_REQUIRED],
        validate: [isDate, VALIDATION_MESSAGES.RESERVATION.WRONG_DATE_FORMAT]
    }
});

const Reservation = mongoose.model('reservation', reservationModel);

module.exports = Reservation;
