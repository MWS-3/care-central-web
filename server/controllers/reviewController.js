const reviewData = require('../models/reviewModel');

// Display list of all Authors.
exports.send = function(req, res) {
    const postReviewTitle = req.body.post_title;
    const postReviewType = req.body.post_type;
    const postreviewLong = req.body.post_long;
    const postReviewLat = req.body.post_lat;
    const postReviewer = req.body.post_reviewer;
    const postReview = req.body.post_review;
    const postRating = req.body.post_rating;
    const postReviewAddress = req.body.post_address;
    const postReviewerUsername = req.body.post_reviewer_username;
    const postReviewerGender = req.body.post_reviewer_gender;
    const postReviewerCountry = req.body.post_reviewer_country;
    const postReviewerImage = req.files.post_reviewer_image;

    res.send(firstName + ' ' + lastName + ' ' + email);
};

// Display detail page for a specific Author.
exports.pull = function(req, res) {
    const postReviewTitle = req.body.post_title;
    const postReviewType = req.body.post_type;
    const postreviewLong = req.body.post_long;
    const postReviewLat = req.body.post_lat;
    const postReviewer = req.body.post_reviewer;
    const postReview = req.body.post_review;
    const postRating = req.body.post_rating;
    const postReviewAddress = req.body.post_address;
    const postReviewerUsername = req.body.post_reviewer_username;
    const postReviewerGender = req.body.post_reviewer_gender;
    const postReviewerCountry = req.body.post_reviewer_country;
    const postReviewerImage = req.files.post_reviewer_image;

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