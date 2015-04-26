var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = mongoose.Schema({
	name: String
});

var School = mongoose.model('School', schoolSchema);

module.exports = School;
