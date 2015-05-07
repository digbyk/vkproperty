var express = require('express');
var router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USER, process.env.SENDGRID_PASSWORD);
var schoolsService = require('../services/schools.js');

module.exports = function () {
	router.use(function (req, res, next) {
		var now = new Date();
		res.locals.year = now.getFullYear();
		next();
	});
	router.get('/', function (req, res) {
		res.render('index', {
			title: 'Victoria Knight Property Search',
			hideLogo: true
		});
	});
	router.get('/about', function (req, res) {
		res.render('about', {
			title: 'Victoria Knight Property Search - About Us'
		});
	});
	router.get('/contact', function (req, res) {
		res.render('contact', {
			title: 'Victoria Knight Property Search - Contact'
		});
	});
	router.post('/contact', function (req, res) {
		var email = new sendgrid.Email({
			to: process.env.SENDGRID_TO,
			from: req.body.email,
			subject: 'New contact request from ' + req.body.name + (req.body.tel ? ' (' + req.body.tel + ')' : ''),
			text: req.body.msg
		});
		sendgrid.send(email, function (err, json) {
			if (err) {
				return console.error(err);
			}
			res.redirect('/thanks');
		});
	});
	router.get('/thanks', function (req, res) {
		res.render('thanks', {
			title: 'Victoria Knight Property Search - Thank you'
		});
	});
	router.get('/testimonials', function (req, res) {
		res.render('testimonials', {
			title: 'Victoria Knight Property Search - Testimonials'
		});
	});
	router.get('/tweets', function (req, res) {
		res.render('tweets', {
			title: 'Victoria Knight Property Search - Tweets'
		});
	});
	router.get('/schools', function (req, res) {
		schoolsService.getSchools(function (err, data) {
			res.render('schools', {
				title: 'Victoria Knight Property Search - Schools',
				schools: data
			});
		})
	});
	return router;
};
