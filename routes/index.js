var express = require('express');
var router = express.Router();

module.exports = function () {
	router.get('/', function (req, res) {
		res.render("index");
	});
	router.get('/about', function (req, res) {
		res.render("about");
	});
	return router;
};
