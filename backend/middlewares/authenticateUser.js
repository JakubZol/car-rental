const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, RESPONSE_MESSAGES } = require('../consts');

const authenticateUser = (req, res, next) => {
    const token = req.cookies.authToken;

    if (token) {
        jwt.verify(token, TOKEN_SECRET, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ error: RESPONSE_MESSAGES.AUTHENTICATION_FAILED });
            } else {
                res.locals.userId = decodedToken.id;
                next();
            }
        });
    } else {
        res.status(401).json({ error: RESPONSE_MESSAGES.AUTHENTICATION_FAILED });
    }
};

module.exports = authenticateUser;
