var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');
var matches = db.get('match');

var getMatches = function(roundId, response) {
	matches.find(
		{"roundId": roundId},
		function(error, results){
			response.json({});
	});
};

router.use(function (request, response, next) {
    next();
});

router.get('/', function (request, response) {
	getMatches(parseInt(request.query.roundId), response);
});

module.exports = router;