const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const PORT = process.env.PORT || 5000;

const router = require('./routes/route.js');
app.use('/', router);

/** Handles error 500  */
app.use((error, req, res, next) => {
	console.error(error.stack);
	res.status(500).send(`Something went terrible wrong`);
});

/** Handles error 404 */
app.use((req, res, next) => {
	// todo - return JSON object - {isError: true, message: 'Not Found', code: 404};
	res.status(404).send(`Sorry, Can't find what you are looking for.`);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

