var express = require('express');
var router = express.Router();
var schoolsService = require('../services/schools.js');

module.exports = function () {
	router.get('/schools', function (req, res) {
		schoolsService.getSchools(function (err, data) {
			res.json(data);
		})
	});
	return router;
};
