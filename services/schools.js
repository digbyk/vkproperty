var apiKey = 'AIzaSyC9Z6Urz_4J-xsHuOlOSMQfCbt_18hOF9c'; // TODO put in ENV

var School = require('../models/school.js');
var _ = require('lodash');

module.exports.getSchools = function (callback) {
	var schools = [];
	School.find({

	}, function (err, schoolData) {
		for (index = 0, len = schoolData.length; index < len; ++index) {
			schools.push({
				name: schoolData[index].EstablishmentName,
				lat: 51.540115,
				lng: -0.9684733
			});
		}
		if (err) callback(err, null);
		callback(null, schoolData);
	});
	/*	data = [{
			name: 'Rupert House School',
			description: 'An independent preparatory school for girls aged 3-11 and boys aged 3-7.',
			url: 'http://www.ruperthouse.org/',
			lat: 51.540115,
			lng: -0.9042651
		}, {
			name: 'Queen Anne\'s School',
			description: '		_.forEach(schoolData, function (index, s) {
			schools.push({
				name: s.EstablishmentName
			});
		});
Queen Anne\’s is an independent boarding and day school for girls with over 450 pupils aged 11 to 18 years.',
			url: 'http://www.qas.org.uk/',
			lat: 51.470606,
			lng: -0.9684733
		}, {
			name: 'The Oratory Preparatory School',
			description: '',
			url: '',
			lat: 51.5154031,
			lng: -1.0798427
		}];
		callback(null, data);*/
}
