const express = require('express');
const initRouter = require('./routes/api');
const connectdb = require('./db/connect');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

connectdb();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

initRouter(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
