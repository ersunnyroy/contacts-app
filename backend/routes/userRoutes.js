const express = require('express');
const router = express.Router();
const { loginUser, registerUser, currentUser, logoutUser } = require('../controllers/userController');
const validateToken = require('../middleware/validateToken');
/**
 * Register user route for register user
 * @access public
 */
router.post("/register", registerUser);

/**
 * Register user route for login
 * @access public
 */
router.post("/login", loginUser);


/**
 * To get current user logged in 
 */
router.get('/current', validateToken, currentUser);

/**
 * Logout user 
 */

// router.get('/logout', logoutUser);

 module.exports = router;