var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');

var seasonDB = db.get('season');

var createSeason = function(body) {
    return {
        end: body.end,
        start: body.start,
        title: body.title
    }
};

var getSeasons = function(response) {
	seasonDB.find(
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
	console.log('Season started');

	getSeasons(response);
});

router.post('/', function(request, response) {
    console.log(request);

    var season = createSeason(request.body);

    console.log(season);

    seasonDB.insert(
        season,
		function(error, results) {
            if (results) {
                response.status(201).json(results);
            } else {
                response.end();
            }
	});
});

module.exports = router;