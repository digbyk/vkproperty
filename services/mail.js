var sendgrid = require('sendgrid')(process.env.SENDGRID_USER, process.env.SENDGRID_PASSWORD);
var _ = require('lodash');
var jade = require('jade');

module.exports.sendContactMail = function (params, callback) {
	var fn = jade.compileFile('./views/mail/contact.jade', {});
	var html = fn(params);
	var options = {
		to: process.env.SENDGRID_TO,
		from: params.email,
		subject: 'New contact request from ' + params.name,
		html: html
	};
	var email = new sendgrid.Email(options);
	sendgrid.send(email, function (err, json) {
		if (err) callback(err, null);
		callback(null, json);
	});
}
