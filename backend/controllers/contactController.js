/**
 * @description Controller of Contacts 
 * @author  Sunny Roy
 */

const Contact = require('../models/contactModel');

const asyncHandler = require('express-async-handler');
const { constants } = require('../constants');

const getContacts = (req, res) => {
    res.status(200).send({message : "Get contacts api route"});
};

const getContact = (req, res) => {
    res.status(200).send({message : "Get single contact api route"});
};


const createContact = asyncHandler(async(req, res) => {
    const { name, email, address, phone_number } = req.body;
    if(!name || !email || !address || !phone_number)
    {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("All fields are mandatory!");    
    }

    try{

        const newContact = await Contact.create({ name, address, email, phone_number, user_id : req.user.id});
        res.status(200).send({message : "New Contact Created", contact : newContact});
    }
    catch(err){
        res.status(constants.SERVER_ERROR);
        throw new Error(err.message);
    }
});


const updateContact = (req, res) => {
    res.status(200).send({message : "Update contact put api route"});
}

const deleteContact = (req, res) => {
    res.status(200).send({message : "Delete contact api route"});
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}