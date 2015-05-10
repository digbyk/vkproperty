var expect = require('expect.js');

var schoolsService = require('../services/schools');

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
