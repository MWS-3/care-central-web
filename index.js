const express = require('express');
const app = express();

const route = require('./route.js');

app.use('/', route);

app.set('view engine', 'hbs');
app.set('views','./views');

app.listen(3000);