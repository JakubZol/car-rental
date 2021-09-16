module.exports.MAX_TOKEN_AGE = 3 * 24 * 60 * 60;
module.exports.MAX_TOKEN_AGE_MILLISECONDS = module.exports.MAX_TOKEN_AGE * 1000;
module.exports.TOKEN_SECRET = 'car-rental-secret';

module.exports.RESPONSE_MESSAGES = {
    ACCESS_DENIED: 'ACCESS_DENIED',
    AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
    RESOURCE_DELETED: 'RESOURCE_DELETED',
};

module.exports.VALIDATION_MESSAGES = {
    USER: {
        EMAIL_REQUIRED: 'EMAIL_REQUIRED',
        PASSWORD_REQUIRED: 'PASSWORD_REQUIRED',
        NAME_REQUIRED: 'NAME_REQUIRED',
        SURNAME_REQUIRED: 'SURNAME_REQUIRED',
        WRONG_PASSWORD: 'WRONG_PASSWORD',
        WRONG_EMAIL: 'WRONG_EMAIL',
        WRONG_EMAIL_FORMAT: 'WRONG_EMAIL_FORMAT',
        WRONG_PASSWORD_LENGTH: 'WRONG_PASSWORD_LENGTH',
        NO_USER: 'NO_USER',
    },
    CAR: {
        BRAND_REQUIRED: 'BRAND_REQUIRED',
        MODEL_REQUIRED: 'MODEL_REQUIRED',
        PRICE_REQUIRED: 'PRICE_REQUIRED'
    },
    RESERVATION: {
        EXPIRATION_DATE_REQUIRED: 'EXPIRATION_DATE_REQUIRED',
        BEGIN_DATE_REQUIRED: 'BEGIN_DATE_REQUIRED',
        WRONG_DATE_FORMAT: 'WRONG_DATE_FORMAT',
    }


};

module.exports.DATABASE_URI = "mongodb://localhost/car-rental-db";
module.exports.PORT_NUMBER = 2400;
module.exports.CORS_ORIGIN = "http://localhost:3000";
