let mongoose = require('mongoose');

let dbURI = process.env.MONGODB_URI || 'mongodb://localhost/links';


// CONNECTION EVENTS

mongoose.connect(dbURI).then(
	function fullfilled() {
		console.log("Successfully connected to mongoose")
	},
	function rejected(err) {
		console.log(err)
	}
);

module.exports = mongoose;