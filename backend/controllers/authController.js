const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { MAX_TOKEN_AGE, MAX_TOKEN_AGE_MILLISECONDS, TOKEN_SECRET, RESPONSE_MESSAGES } = require('../consts');


const generateToken = id => jwt.sign({ id }, TOKEN_SECRET, { expiresIn: MAX_TOKEN_AGE });

module.exports.register = async (req, res) => {
    const { email, password, name, surname, isAdmin } = req.body;

    try {
        const { _doc: { password: _, ...user } } = await User.create({ email, password, name, surname, isAdmin });
        const token = generateToken(user._id);
        res.cookie('authToken', token, { httpOnly: true, maxAge: MAX_TOKEN_AGE_MILLISECONDS, secure: true, sameSite: 'None' });
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(201).json(user);
    }
    catch({ errors }) {
        const errorMessages = Object.values(errors).map(({ message }) => message);
        res.status(400).json({ error: errorMessages });
    }
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { _doc: { password: _, ...user } } = await User.login(email, password);
        const token = generateToken(user._id);
        res.cookie('authToken', token, { httpOnly: true, maxAge: MAX_TOKEN_AGE_MILLISECONDS, secure:true, sameSite: 'None' });
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json(user);
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports.logout = (req, res) => {
    res.cookie('authToken', '', { maxAge: 1, secure:true, sameSite: 'None' });
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).json();
};

module.exports.getUser = async (req, res) => {
    try {
        const { _doc: { password, ...user } } = await User.findOne({ _id: res.locals.userId });
        res.status(200).json(user);
    }
    catch {
        res.status(400).json({ error: RESPONSE_MESSAGES.BAD_REQUEST });
    }
};
