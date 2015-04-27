var apiKey = 'AIzaSyC9Z6Urz_4J-xsHuOlOSMQfCbt_18hOF9c'; // TODO put in ENV

var School = require('../models/school.js');
var _ = require('lodash');

module.exports.getSchools = function (callback) {
	var schools = [];
	School.find({}, function (err, data) {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]._doc.EstablishmentName);
			schools.push({
				name: data[i]._doc.EstablishmentName,
				lat: data[i]._doc.lat,
				lng: data[i]._doc.lng
			});
		}
		if (err) callback(err, null);
		callback(null, schools);
	});
}
