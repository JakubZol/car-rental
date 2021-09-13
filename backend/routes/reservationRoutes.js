const { Router } = require('express');
const authenticateUser = require('../middlewares/authenticateUser');
const reservationsController = require('../controllers/reservationController');

const router = Router();

router.get('/reservations', authenticateUser, reservationsController.getReservations);
router.post('/reservations', authenticateUser, reservationsController.createReservation);
router.put('/reservations', authenticateUser, reservationsController.modifyReservation);

module.exports = router;
