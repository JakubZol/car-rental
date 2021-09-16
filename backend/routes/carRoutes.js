const { Router } = require('express');
const authenticateUser = require('../middlewares/authenticateUser');
const verifyAdmin = require('../middlewares/verifyAdmin');
const carsController = require('../controllers/carController');
const checkCarAvailability = require('../middlewares/checkCarAvailability');

const router = Router();

router.get('/cars', authenticateUser, carsController.getAllCars);
router.post('/cars', verifyAdmin, carsController.addCar);
router.delete('/cars', verifyAdmin, carsController.deleteCar);
router.put('/cars', verifyAdmin, carsController.modifyCar);
router.get('/cars/availability', authenticateUser, checkCarAvailability, carsController.checkCarAvailability);

module.exports = router;
