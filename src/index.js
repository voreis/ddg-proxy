const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/api/search', require('./routes/search'));
app.use(require('./errors/not-found'));

module.exports = app;