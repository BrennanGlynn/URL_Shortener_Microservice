let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let linkSchema = new Schema({
	"original_url": { type: String, required: true, unique: true },
	"short_code": { type: String, required: true, unique: true }
});

let model = mongoose.model('Link', linkSchema);

module.exports = model;