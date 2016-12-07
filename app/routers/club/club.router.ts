var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');

var clubs = db.get('club');

var createClub = function(body) {
    return {
        title: body.title
    }
};

var getClubs = function(response) {
	clubs.find(
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
	console.log('Club started');

	getClubs(response);
});

router.post('/', function(request, response) {
    console.log(request);

    var club = createClub(request.body);

    console.log(club);

    clubs.insert(
        club,
		function(error, results) {
            if (results) {
                response.status(201).json(results);
            } else {
                response.end();
            }
	});
});

module.exports = router;