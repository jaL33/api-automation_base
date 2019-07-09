var express = require('express');
var bodyParser = require('body-parser');

var session = require('./routes/session');

var port = 3002;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', session);

app.listen(process.env.PORT || port, () => {
   console.log('Server started on port: ' + port);
});

module.exports = app;
