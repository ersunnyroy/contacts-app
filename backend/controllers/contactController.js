/**
 * @description Controller of Contacts 
 * @author  Sunny Roy
 */

const Contact = require('../models/contactModel');

const asyncHandler = require('express-async-handler');
const { constants } = require('../constants');

const getContacts = (req, res) => {
    res.status(constants.OKAY).send({message : "Get contacts api route"});
};

const getContact = (req, res) => {
    res.status(constants.OKAY).send({message : "Get single contact api route"});
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
        res.status(constants.OKAY).send({message : "New Contact Created", contact : newContact});
    }
    catch(err){
        res.status(constants.SERVER_ERROR);
        throw new Error(err.message);
    }
});


const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, address, email, phone_number } = req.body;

    const updateData = {
        name, address, email, phone_number
    };

    const filter = {_id : id};
    try{
        const UpdatedContact = await Contact.findOneAndUpdate(filter, updateData, {
            new: true
        });

        res.status(constants.OKAY).send({message : "Contact Updated!", contact : UpdatedContact});
    } catch(err){
        res.status(constants.SERVER_ERROR);
        throw new Error(err.message);     
    }
})

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