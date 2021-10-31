//database import
var db = require('../database');

const { json } = require('express/lib/response');
const { response } = require('express');

const User = require('../model/model');


module.exports = {


    //get descriptionheet function
    ReviewApproveRequest: function (req, res) {

        var mySearch = {
            'landlord_uid': req.query.landlord_uid
        }
        User.find(mySearch)
            .then(data => {
                res.send(data);

            }).catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });

            })





    }
}


