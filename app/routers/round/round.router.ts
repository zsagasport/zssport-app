var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');
var rounds = db.get('round');

var getRounds = function(roundId, response) {
	rounds.find(
		{"roundId":roundId},
		function(error, results) {
			response.json({});
		}
	);
};

router.use(function (request, response, next) {
    next()
});

router.get('/rounds', function (request, response) {
	console.log('Rounds started');

	getRounds(parseInt(request.query.roundId), response);
});

module.exports = router;