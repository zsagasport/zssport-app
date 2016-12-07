var express = require('express');

var app = express();

var cors = require('cors');

app.use(cors());
app.use(express.static(__dirname));

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.json({extended: true});

app.use(bodyParser.json());

app.get('/', function(request, response){
    response.sendFile('index.html', {root: __dirname + '/public'});
});

var clubRouter = require('./app/routers/club/club.router');

app.use('/club', clubRouter);

var matchRouter = require('./app/routers/match/match.router');

app.use('/match', matchRouter);

var roundRouter = require('./app/routers/round/round.router');

app.use('/round', roundRouter);

var expressFallback = require('express-history-api-fallback');

app.use(expressFallback('index.html', { root: __dirname + '/public' }));

app.listen(8888);