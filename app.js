require('newrelic');
var config = require('./config.js');
var express = require('express');
var app = express();
var path = require('path');

require('./config/db.js');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/images/vk_logo_taupe_180x180px.jpg'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'ssshhhhh',
	resave: false,
	saveUninitialized: false
}));

var routes = require('./routes')();
app.use('/', routes);

var host = config.NODE_HOST || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = config.NODE_PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, host, function () {
	console.log("Listening on " + host + ":" + port)
});
