var mongoose = require('mongoose');
var config = require('../config.js');

var mongodbUrl = config.MONGODB_URL || process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://127.0.0.1:27017';

mongoose.connect(mongodbUrl);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('Database ready for connections.');
});
