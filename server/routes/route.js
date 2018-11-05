// route.js - route module.

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();

const user_controller = require('../controllers/userController');
const post_controller = require('../controllers/postController');
const review_controller = require('../controllers/reviewController');

app.use(express.json());

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const { check, validationResult } = require('express-validator/check');

// Home page route.
router.get('/', function(req, res) {
    res.send('CareFinder home page');
})

// About page route.
router.get('/about', function(req, res) {
    res.send('About CareFinder');
})

router.post('/signup', [
    check('firstN').trim().escape(),
    check('lastN').trim().escape(),
    check('userN').trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('pass').trim().escape(),
    check('city').trim().escape(),
    check('state').trim().escape(),
    check('country').trim().escape()

], user_controller.signup);

router.post('/upload', [
    check('userN').trim().escape(),
    check('email').isEmail().normalizeEmail()

], user_controller.upload);


router.post('/login', [
    check('userN').trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('pass').trim().escape()

], user_controller.login);

router.post('/post', [
    check('post_title').trim().escape(),
    check('post_type').trim().escape(),
    check('post_phone').trim().escape(),
    check('post_web').trim().escape(),
    check('post_long').trim().escape(),
    check('post_lat').trim().escape(),
    check('post_owner').isEmail().normalizeEmail(),
    check('post_address').trim().escape(),
    check('post_city').trim().escape(),
    check('post_state').trim().escape(),
    check('post_country').trim().escape()

], post_controller.post);

router.post('/review', [
    check('post_title').trim().escape(),
    check('post_type').trim().escape(),
    check('post_long').trim().escape(),
    check('post_lat').trim().escape(),
    check('post_review').trim().escape(),
    check('post_reviewer').isEmail().normalizeEmail(),
    check('post_rating').trim().escape(),
    check('post_address').trim().escape(),
    check('post_reviewer_username').trim().escape(),
    check('post_reviewer_gender').trim().escape(),
    check('post_reviewer_country').trim().escape()

], review_controller.send);

module.exports = router;