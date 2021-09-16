const { Router } = require('express');
const authenticateUser = require('../middlewares/authenticateUser');
const authController = require('../controllers/authController');

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authenticateUser, authController.logout);
router.get('/user', authenticateUser, authController.getUser);

module.exports = router;
