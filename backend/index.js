const express = require("express");
const mongoose = require("mongoose");
const authRouter = require('./routes/authRoutes');
const carRouter = require('./routes/carRoutes');
const reservationRouter = require('./routes/reservationRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { DATABASE_URI, PORT_NUMBER, CORS_ORIGIN } = require('./consts');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: CORS_ORIGIN,
}));


mongoose.connect(DATABASE_URI).then(() => {
    app.listen(PORT_NUMBER, () => {console.log(`Server started at port: ${PORT_NUMBER}`)});
}).catch(err => {
    console.error(err);
});

app.use(authRouter);
app.use(carRouter);
app.use(reservationRouter);


