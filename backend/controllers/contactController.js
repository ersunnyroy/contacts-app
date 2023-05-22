/**
 * @description Controller of Contacts 
 * @author  Sunny Roy
 */

const getContacts = (req, res) => {
    res.status(200).send({message : "Get contacts api route"});
};

const getContact = (req, res) => {
    res.status(200).send({message : "Get single contact api route"});
};


const createContact = (req, res) => {
    res.status(200).send({message : "Create contact post api route"});
};


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