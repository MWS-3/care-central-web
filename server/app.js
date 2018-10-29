const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const PORT = process.env.PORT || 5000;

const router = require('./routes/route.js');

app.use('/', router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));