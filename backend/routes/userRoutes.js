const express = require('express');
const router = express.Router();

/**
 * Register user route for register user
 * @access public
 */
router.route("/register").post((req, res) => {
    res.status(200).send({message : "User registeration route"});
 });

/**
 * Register user route for login
 * @access public
 */
router.route("/login").post((req, res) => {
    res.status(200).send({message : "user login route"});
 });

 module.exports = router;