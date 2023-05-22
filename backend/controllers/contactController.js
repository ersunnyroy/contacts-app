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


module.exports = {
    getContacts,
    getContact,
    
}