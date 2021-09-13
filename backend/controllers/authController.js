const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { MAX_TOKEN_AGE, MAX_TOKEN_AGE_MILLISECONDS, TOKEN_SECRET } = require('../consts');


const generateToken = id => jwt.sign({ id }, TOKEN_SECRET, { expiresIn: MAX_TOKEN_AGE });

module.exports.register = async (req, res) => {
    const { email, password, name, surname, isAdmin } = req.body;

    try {
        const { _doc: { password: _, ...user } } = await User.create({ email, password, name, surname, isAdmin });
        const token = generateToken(user._id);
        res.cookie('authToken', token, { httpOnly: true, maxAge: MAX_TOKEN_AGE_MILLISECONDS });
        res.status(201).json(user);
    }
    catch(error) {
        res.status(400).json(error);
    }
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { _doc: { password: _, ...user } } = await User.login(email, password);
        const token = generateToken(user._id);
        res.cookie('authToken', token, { httpOnly: true, maxAge: MAX_TOKEN_AGE_MILLISECONDS });
        res.status(200).json(user);
    }
    catch(error) {
        res.status(400).json(error);
    }
};

module.exports.logout = (req, res) => {
    res.cookie('authToken', '', { maxAge: 1 });
    res.status(200).json({});
};
