var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');

var competitionDB = db.get('competition');

var createCompetition = function(body) {
    return {
        country: body.country,
        seasonId: body.seasonId,
        sportId: body.sportId,
        title: body.title
    }
};

var getCompetitions = function(response) {
	competitionDB.find(
        {},
		function(error, results) {
            if (results) {
                response.json(results);
            } else {
                response.end();
            }
	});
};

router.use(function (request, response, next) {
    next()
});

router.get('/', function (request, response) {
	console.log('Competition started');

	getCompetitions(response);
});

router.post('/', function(request, response) {
    console.log(request);

    var competition = createCompetition(request.body);

    competitionDB.insert(
        competition,
		function(error, results) {
            if (results) {
                response.status(201).json(results);
            } else {
                response.end();
            }
	    }
    );
});

module.exports = router;