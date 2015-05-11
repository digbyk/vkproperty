var expect = require('expect.js');

var schoolsService = require('../services/schools');
var emailService = require('../services/mail');
var jade = require('jade');

describe('SchoolsService', function () {
	before(function () {
		require('../config/db.js');
	});
	describe('#getSchools()', function () {
		it('should return a list of schools', function (done) {
			schoolsService.getSchools(function (err, data) {
				if (err) throw err;
				expect(data).to.be.ok;
				expect(data.length).to.be(251);
				done();
			});
		});
	});
});

describe('MailService', function () {
	describe('#sendMail()', function () {
		it('should send a mail', function (done) {
			var params = {
				name: 'John Smith',
				email: 'john@smith.com',
				telephone: '01234 567890',
				message: 'This is my message.'
			};
			emailService.sendContactMail(params, function (err, data) {
				if (err) throw err;
				expect(data).to.be.ok;
				done();
			});
		});
	});
});

/*describe('JadeCompiler', function () {
	describe('#jade()', function () {
		it('should compile', function (done) {
			var fn = jade.compileFile('./views/mail/contact.jade', {});
			var html = fn({
				from: 'digby@digby.net'
			});
			expect(html).to.be('ajshdkjh');
			done();
		});
	});
});*/
