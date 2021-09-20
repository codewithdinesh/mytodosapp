const e = require('express');
var express = require('express');
const res = require('express/lib/response');
const insertController = require('../controller/insert-controller');
var router = express.Router();
var db = require('../database')

// var insertController = require('../controller/insert-controller');

// router.get('/add-user', insertController.userForm);

router.get('/', insertController.homePage);

//Search Get Method
router.get('/search', insertController.getData)


//add new student descriptionheet
router.get('/add', insertController.addUserPage)


//add new student descriptionheet post data ,,data will added to db
router.post('/create', insertController.addUser);

module.exports = router;