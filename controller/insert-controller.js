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

        var tododata = {
            "id": `${req.body.id}`,
            "todos": [
                {
                    "from": `${req.body.s1_from}`,
                    "to": `${req.body.s1_to}`,
                    "name": `${req.body.s1_title}`,
                    "description": `${req.body.s1_dec}`

                },
                {
                    "from": `${req.body.s2_from}`,
                    "to": `${req.body.s2_to}`,
                    "name": `${req.body.s2_title}`,
                    "description": `${req.body.s2_dec}`

                },
                {
                    "from": `${req.body.s3_from}`,
                    "to": `${req.body.s3_to}`,
                    "name": `${req.body.s3_title}`,
                    "description": `${req.body.s3_dec}`


                },
                {
                    "from": `${req.body.s4_from}`,
                    "to": `${req.body.s4_to}`,
                    "name": `${req.body.s4_title}`,
                    "description": `${req.body.s4_dec}`

                },
                {
                    "from": `${req.body.s5_from}`,
                    "to": `${req.body.s5_to}`,
                    "name": `${req.body.s5_title}`,
                    "description": `${req.body.s5_dec}`

                },
                {
                    "from": `${req.body.s6_from}`,
                    "to": `${req.body.s6_to}`,
                    "name": `${req.body.s6_title}`,
                    "description": `${req.body.s6_dec}`

                },
                {
                    "from": `${req.body.s7_from}`,
                    "to": `${req.body.s7_to}`,
                    "name": `${req.body.s7_title}`,
                    "description": `${req.body.s7_dec}`

                },
                {
                    "from": `${req.body.s8_from}`,
                    "to": `${req.body.s8_to}`,
                    "name": `${req.body.s8_title}`,
                    "description": `${req.body.s8_dec}`

                },
                {
                    "from": `${req.body.s9_from}`,
                    "to": `${req.body.s9_to}`,
                    "name": `${req.body.s9_title}`,
                    "description": `${req.body.s9_dec}`

                }
            ]
        }




        db.collection('doto').insertOne(tododata, function (err, result) {
            if (err) {
                console.log("Error While Adding the data");

                return ('Error');
            }


            else {
                res.render('success')
                console.log("Todo Added")
            }


        });

    },

    //get descriptionheet function
    getData: function (req, res) {
        var search_term = req.query.id;
        if (search_term.length == 0) {
            res.render('err1')
        } else {

            var mySearch = {
                'id': search_term
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

