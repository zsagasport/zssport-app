var cors = require('cors');
var express = require('express');
var expressFallback = require('express-history-api-fallback');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');
var matches = db.get('match');
var rounds = db.get('round');

var app = express();

var clubRouter = require('./app/routers/club-router');

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.json({extended: true});

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

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.get('/', function(request, response){
    response.sendFile('index.html', {root: __dirname + '/public'});
});

app.use('/club', clubRouter);

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