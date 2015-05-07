var expect = require('expect.js');
require('../config/db.js');
var schoolsService = require('../services/schools');

describe('SchoolsService', function () {
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
