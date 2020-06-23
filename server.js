const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./src/routes/routing');

const errorLogger = require('./src/utilities/ErrorLogger');
const requestLogger = require('./src/utilities/RequestLogger');
const cors = require("cors");
const app = express();
app.use(cors());

app.listen(3000, () => {
    console.log('listening on 3000');
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/', Router);
app.use(errorLogger);

module.exports = app;