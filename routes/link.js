let express = require('express');
let router = express.Router();

// Request is used to make http calls
let request = require('request-promise-native');

router.get('/:url(*)', function (req, res) {
	let url = req.params.url;
	let response;

	request(url).then(function () {
		response = {
			"original_url": url,
			"short_url": "TODO"
		};
	})
	.catch(function () {
		response = { "error": "URL invalid" };
	}).then(function () {
		res.json(response);
	});
});

module.exports = router;