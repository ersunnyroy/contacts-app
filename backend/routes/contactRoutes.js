const express = require('express');
const router = express.Router();
const {getContact, getContacts, } = require("../controllers/contactController");

/**
 * Get all contacts api route
 * @access public
 */
router.route("/").get(getContacts);

/**
 * Get sepecific contacts api route
 * @access public
 */
router.route("/:id").get(getContact);

/**
 * Create contact api route
 * @access public
 */
router.route("/").post((req, res) => {
    res.status(200).send({message : "Create contact post api route"});
});

/**
 * Update contact api route
 * @access public
 */
router.route("/:id").put((req, res) => {
    res.status(200).send({message : "Update contact put api route"});
});

/**
 * Delete contact api route
 * @access public
 */
router.route("/:id").delete((req, res) => {
    res.status(200).send({message : "Delete contact api route"});
});

module.exports = router;