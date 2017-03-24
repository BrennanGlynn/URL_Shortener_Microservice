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
			let response = new Link({
				"original_url": url,
				"short_code": newID
			});

			response.save(function (err, response) {
				if (err) return res.json(err);
				res.json(response);
			});
			// Link.create({
			// 	"original_url": url,
			// 	"short_code": newID
			// }, function (err) {
			// 	if (err) return res.send(err);
			// });
			// res.json({"original_url": link.original_url, "short_code": link.short_code});
	}).catch(function() {
		res.json({
			"original_url": null,
			"short_code": null
		});
	});
});

module.exports = router;