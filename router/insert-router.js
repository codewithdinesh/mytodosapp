const e = require('express');
var express = require('express');
const res = require('express/lib/response');
const insertController = require('../controller/insert-controller');
var router = express.Router();
var db = require('../database')
const User=require('../model/model');


router.post('/sendApproverequest', function (req, res) {
        

    var userRequest = new User({
        uid: req.body.uid,
        landlord_uid: req.body.landlord_uid,
        address_new: req.body.address_new
    });
    userRequest.save(userRequest)
        .then(data => {
            res.send(data);

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while requesting address update."
            });
        });


});

router.get('/ReviewApproveRequest',insertController.ReviewApproveRequest);

module.exports = router;