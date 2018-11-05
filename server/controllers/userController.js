const userData = require('../models/userModel');

const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
//...

// Connection URL
const url = 'mongodb://localhost:27017';

// Display list of all Authors.
exports.signup = function(req, res) {
    const firstName = req.body.firstN;
    const lastName = req.body.lastN;
    const userName = req.body.userN;
    const email = req.body.email;
    const pass = req.body.pass;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        const dbo = db.db("careDB");
        const myobj = {"firstName": firstName, "lastName": lastName,
                       "userName": userName, "email": email,
                       "pass": pass, "city": city,
                       "state": state, "country": country

        };
        dbo.collection("users").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("User Data Inserted");
            db.close();
        });
    });


    res.send(firstName + ' ' + lastName + ' ' + email);
};



exports.upload = function(req, res) {
    const userName = req.body.userN;
    const email = req.body.email;

    if (req.files.user_image.mimetype === 'jpg' || 'jpeg' || 'png' || 'bmp') {

        req.files.user_image.mv('../uploads/' + req.files.user_image.name, function (err) {

            if (err) throw err;

            MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
                if (err) throw err;
                const dbo = db.db("careDB");
                const myobj = {
                    "type": "profile", "filename": req.files.user_image.name,
                    "userName": userName, "email": email

                };
                dbo.collection("userImager").insertOne(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("User Image Inserted");
                    db.close();
                });
            });

        });

        res.send(userName + ' ' + '' + ' ' + email);
    }

};


// Display list of all Authors.

// Display detail page for a specific Author.
exports.login = function(req, res) {
    const userName = req.body.userN;
    const email = req.body.email;
    const pass = req.body.pass;

    res.send(userName + ' ' + ' ' + ' ' + email);
};

// Display Author create form on GET.
exports.activate = function(req, res) {
    res.send('NOT IMPLEMENTED: Activate');
};

// Handle Author create on POST.
exports.block = function(req, res) {
    res.send('NOT IMPLEMENTED: Block');
};

// Display Author delete form on GET.
exports.report = function(req, res) {
    res.send('NOT IMPLEMENTED:Report');
};

// Display Author create form on GET.
exports.delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Delete');
};

// Display Author create form on GET.
exports.edit = function(req, res) {
    res.send('NOT IMPLEMENTED: Edit');
};