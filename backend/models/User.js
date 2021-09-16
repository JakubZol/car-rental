const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const { VALIDATION_MESSAGES } = require('../consts');

const userModel = mongoose.Schema({
    email: {
        type: String,
        required: [true, VALIDATION_MESSAGES.USER.EMAIL_REQUIRED],
        unique: true,
        validate: [isEmail, VALIDATION_MESSAGES.USER.WRONG_EMAIL_FORMAT]
    },
    password: {
        type: String,
        required: [true, VALIDATION_MESSAGES.USER.PASSWORD_REQUIRED],
        minLength: [6, VALIDATION_MESSAGES.USER.WRONG_PASSWORD_LENGTH]
    },
    name: {
        type: String,
        required: [true, VALIDATION_MESSAGES.USER.NAME_REQUIRED]
    },
    surname: {
        type: String,
        required: [true, VALIDATION_MESSAGES.USER.SURNAME_REQUIRED]
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    }
});

userModel.pre('save', async function(next) {
    const hashingSalt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, hashingSalt);
    next();
});

userModel.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error(VALIDATION_MESSAGES.USER.WRONG_PASSWORD);
    }
    throw Error(VALIDATION_MESSAGES.USER.NO_USER);
};


const User = mongoose.model("user", userModel);

module.exports = User;
