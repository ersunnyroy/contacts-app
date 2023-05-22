const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/userController');
/**
 * Register user route for register user
 * @access public
 */
router.route("/register").post(registerUser);

/**
 * Register user route for login
 * @access public
 */
router.route("/login").post(loginUser);

 module.exports = router;