var cors = require('cors');
var express = require('express');
var expressFallback = require('express-history-api-fallback');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');

var app = express();

var clubRouter = require('./app/routers/club/club.router');
var matchRouter = require('./app/routers/match/match.router');
var roundRouter = require('./app/routers/round/round.router');

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.json({extended: true});

app.use(cors());

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.get('/', function(request, response){
    response.sendFile('index.html', {root: __dirname + '/public'});
});

app.use('/club', clubRouter);
app.use('/match', matchRouter);
app.use('/round', roundRouter);

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