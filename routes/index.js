let express = require('express');
let router = express.Router();

let db = require('../model/db');
let Link = require('../model/link');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:shortCode(*)', function (req, res) {
	let shortCode = req.params.shortCode;

	Link.find({ "short_code" :  shortCode }, function (err, doc) {
		if (doc[0]) {
			res.redirect(doc[0].original_url);
		} else {
			res.send("Invalid short code");
		}
	});

});

module.exports = router;
