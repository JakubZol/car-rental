const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { TOKEN_SECRET, RESPONSE_MESSAGES } = require('../consts');


const verifyAdmin = (req, res, next) => {
    const token = req.cookies.authToken;

    if (token) {
        jwt.verify(token, TOKEN_SECRET, async (error, decodedToken) => {
            if (error) {
                res.status(401).json({ error: RESPONSE_MESSAGES.AUTHENTICATION_FAILED });
            } else {
                try {
                    const user = await User.findOne({_id: decodedToken.id});

                    if (user.isAdmin) {
                        next();
                    }
                    else {
                        res.status(403).json({ error: RESPONSE_MESSAGES.ACCESS_DENIED });
                    }
                }
                catch(error) {
                    res.status(400).json({ error: RESPONSE_MESSAGES.BAD_REQUEST });
                }
            }
        });
    } else {
        res.status(401).json({ error: RESPONSE_MESSAGES.AUTHENTICATION_FAILED });
    }
};

module.exports = verifyAdmin;
