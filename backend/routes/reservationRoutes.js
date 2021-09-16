const { Router } = require('express');
const authenticateUser = require('../middlewares/authenticateUser');
const reservationsController = require('../controllers/reservationController');
const checkCarAvailability = require('../middlewares/checkCarAvailability');

const router = Router();

router.get('/reservations', authenticateUser, reservationsController.getReservations);
router.post('/reservations', authenticateUser, checkCarAvailability, reservationsController.createReservation);
router.put('/reservations', authenticateUser, reservationsController.modifyReservation);

module.exports = router;
