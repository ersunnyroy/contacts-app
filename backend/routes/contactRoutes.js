const express = require('express');
const router = express.Router();

/**
 * Get all contacts api route
 * @access public
 */
router.route("/").get((req, res) => {
   res.status(200).send({message : "Get contacts api route"});
});

/**
 * Get sepecific contacts api route
 * @access public
 */
router.route("/:id").get((req, res) => {
    res.status(200).send({message : "Get single contacts api route"});
 });

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