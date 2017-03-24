let express = require('express');
let router = express.Router();

let db = require('../model/db');
let Link = require('../model/link');

// Request is used to make http calls
let request = require('request-promise-native');

// shortid generates a random sequence
let shortid = require('shortid');

router.get('/:url(*)', function (req, res) {
	let url = req.params.url;
	let response;

	request(url)
	.then(function () {
		let newID = shortid.generate();
		Link.create({
			"original_url": url,
			"short_code": newID
		}, function (err, link) {
			if (err) {
				res.send(err);
			} else {
				res.json({"original_url": link.original_url, "short_code": link.short_code});
			}
		});
	})
	.catch(function () {
		response = { "error": "URL invalid" };
	});
});

module.exports = router;