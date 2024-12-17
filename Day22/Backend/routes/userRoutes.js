const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupUser); // Signup route
router.post('/login', loginUser);   // Login route

module.exports = router;
