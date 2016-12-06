var cors = require('cors');
var express = require('express');
var expressFallback = require('express-history-api-fallback');

var mongo = require('mongodb');
var monk = require('monk');

var db = monk('localhost:27017/zssport');
var matches = db.get('match');
var rounds = db.get('round');
var clubs = db.get('club');
var app = express();
var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.json({extended: true});

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

var getMatches = function(roundId, response) {
	matches.find(
		{"roundId":roundId},
		function(error, results){
			// json.matches = results;

			response.json(roundMatches);
	});
};

var getRounds = function(roundId, response) {
	rounds.find(
		{"roundId":roundId},
		function(error, results) {
			json.rounds = results;

			response.json(json);
		}
	);
};

app.use(cors());

app.post('/club', parseUrlEncoded, function(request, response) {
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

app.use(express.static(__dirname));

app.get('/', function(request, response){
    response.sendFile('index.html', {root: __dirname + '/public'});
});

app.get('/club', function (request, response) {
	console.log('Club started');

	getClubs(response);
});

app.get('/matches', function (request, response) {
	console.log('Matches started');

	getMatches(parseInt(request.query.roundId), response);
});

app.get('/rounds', function (request, response) {
	console.log('Rounds started');

	getRounds(parseInt(request.query.roundId), response);
});

app.get('/summarized', function (request, response) {
	var data = {
		summarized: summarized
	}

	response.json(data);
	
  	console.log('Summarized started');
  	console.log(json);
});

app.use(expressFallback('index.html', { root: __dirname + '/public' }));

app.listen(8888);