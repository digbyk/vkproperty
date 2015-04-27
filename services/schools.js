var apiKey = 'AIzaSyC9Z6Urz_4J-xsHuOlOSMQfCbt_18hOF9c'; // TODO put in ENV

var School = require('../models/school.js');
var _ = require('lodash');

module.exports.getSchools = function (callback) {
	var schools = [];
	School.find({}, function (err, data) {
		for (var i = 0; i < data.length; i++) {
			schools.push({
				name: data[i]._doc.name,
				telStd: data[i]._doc.telStd,
				telNum: data[i]._doc.telNum,
				website: data[i]._doc.website,
				lat: data[i]._doc.loc.coordinates[1],
				lng: data[i]._doc.loc.coordinates[0]
			});
		}
		if (err) callback(err, null);
		callback(null, schools);
	});
}
