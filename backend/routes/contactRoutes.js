const express = require('express');
const router = express.Router();
const {getContact, getContacts, createContact, updateContact, deleteContact } = require("../controllers/contactController");

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
router.route("/").post(createContact);

/**
 * Update contact api route
 * @access public
 */
router.route("/:id").put(updateContact);

/**
 * Delete contact api route
 * @access public
 */
router.route("/:id").delete(deleteContact);

module.exports = router;