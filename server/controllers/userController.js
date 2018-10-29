const userData = require('../models/userModel');

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
    const userImage = req.files.user_image;

    res.send(firstName + ' ' + lastName + ' ' + email);
};

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