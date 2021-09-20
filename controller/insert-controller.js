//database import
var db = require('../database');

const { json } = require('express/lib/response');



module.exports = {

    homePage: function (req, res) {

        res.render('search')

    },

    //render addUser page
    addUserPage: function (req, res) {
        res.render('add-user')
    },

    addUser: function (req, res) {
        //checking input
        var mydate = {
            "_id": `${req.body.id}`
        }

        var tododata = {
            "_id": `${req.body.id}`,
            "todos": [
                {
                    "from": `${req.body.s1_from}`,
                    "to": `${req.body.s1_to}`,
                    "name": `${req.body.s1_title}`,
                    "description": `${req.body.s1_dec}`

                }
            ]
        }


        db.collection('doto').updateOne(
            mydate,
            {
                $push: {
                    todos: {
                        $each: [{
                            "from": `${req.body.s1_from}`,
                            "to": `${req.body.s1_to}`,
                            "name": `${req.body.s1_title}`,
                            "description": `${req.body.s1_dec}`
                        }]
                    }
                }
            },
            {
                upsert: true,


            }, function (err, re) {
                if (err) {
                    console.log("Error While Adding the data");

                    return ('Error');
                }
                else {
                    res.render('success')
                    console.log("Todo Added")
                }


            }

        )










    },

    //get descriptionheet function
    getData: function (req, res) {
        var search_term = req.query.id;
        if (search_term.length == 0) {
            res.render('err1')
        } else {

            var mySearch = {
                '_id': search_term
            }


            //Find One for ONly one result
            db.collection('doto').findOne(mySearch, (err, result) => {
                if (err) {
                    res.render('err2')
                }
                else {
                    if (result == null) {

                        res.render('err2');

                    } else {

                        console.log(result)

                        res.render('todolist', { todos: result })
                    }


                }


            })

        }
    }
}


