var express = require('express');

var app = express();

app.listen(8000);

app.use(express.static('client'));


module.exports = app;
