const postData = require('../models/postModel');

// Display list of all Authors.
exports.post = function(req, res) {
    const postTitle = req.body.post_title;
    const postType = req.body.post_type;
    const postPhone = req.body.post_phone;
    const postWeb = req.body.post_web;
    const postLong = req.body.post_long;
    const postLat = req.body.post_lat;
    const postOwner = req.body.post_owner;
    const postAddress = req.body.post_address;
    const postCity = req.body.post_city;
    const postState = req.body.post_state;
    const postCountry = req.body.post_country;
    const postImage = req.files.post_image;

    res.send(firstName + ' ' + lastName + ' ' + email);
};

// Display detail page for a specific Author.
exports.pull = function(req, res) {
    const postTitle = req.body.post_title;
    const postType = req.body.post_type;
    const postPhone = req.body.post_phone;
    const postWeb = req.body.post_web;
    const postLong = req.body.post_long;
    const postLat = req.body.post_lat;
    const postOwner = req.body.post_owner;
    const postAddress = req.body.post_address;
    const postCity = req.body.post_city;
    const postState = req.body.post_state;
    const postCountry = req.body.post_country;
    const postImage = req.files.post_image;

    res.send(firstName + ' ' + lastName + ' ' + email);
};

// Display Author create form on GET.
exports.delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Activate');
};

// Display Author delete form on GET.
exports.report = function(req, res) {
    res.send('NOT IMPLEMENTED:Report');
};

// Display Author create form on GET.
exports.edit = function(req, res) {
    res.send('NOT IMPLEMENTED: Edit');
};