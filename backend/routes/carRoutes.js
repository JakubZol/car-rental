const { Router } = require('express');
const authenticateUser = require('../middlewares/authenticateUser');
const verifyAdmin = require('../middlewares/verifyAdmin');
const carsController = require('../controllers/carController');

const router = Router();

router.get('/cars', authenticateUser, carsController.getAllCars);
router.post('/cars', verifyAdmin, carsController.addCar);
router.delete('/cars', verifyAdmin, carsController.deleteCar);
router.put('/cars', verifyAdmin, carsController.modifyCar);

module.exports = router;
