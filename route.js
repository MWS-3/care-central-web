const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on things.');
});

router.get('/first', function(req, res){
    res.render('home',{'Jigga' : 'Byte'});
});
router.post('/', function(req, res){
    res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;