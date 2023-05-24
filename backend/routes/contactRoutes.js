const express = require('express');
const router = express.Router();
const {getContact, getContacts, createContact, updateContact, deleteContact } = require("../controllers/contactController");
const validateToken = require('../middleware/validateToken');

router.use(validateToken);
/**
 * Get all contacts api route
 * @access public
 */
router.get("/", getContacts);

/**
 * Get sepecific contacts api route
 * @access public
 */
router.get("/:id", getContact);

/**
 * Create contact api route
 * @access public
 */
router.post("/", createContact);

/**
 * Update contact api route
 * @access public
 */
router.put("/:id", updateContact);

/**
 * Delete contact api route
 * @access public
 */
router.delete("/:id", deleteContact);

module.exports = router;