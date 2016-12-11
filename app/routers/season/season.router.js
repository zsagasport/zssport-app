var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');
var seasonDB = db.get('season');
var createSeason = function (body) {
    return {
        end: body.end,
        start: body.start,
        title: body.title
    };
};
var getSeasons = function (response) {
    seasonDB.find({}, function (error, results) {
        if (results) {
            response.json(results);
        }
        else {
            response.end();
        }
    });
};
var getSeason = function (response, query) {
    seasonDB.find(query, function (error, results) {
        if (results) {
            response.json(results[0]);
        }
        else {
            response.end();
        }
    });
};
router.use(function (request, response, next) {
    next();
});
router.get('/id', function (request, response) {
    getSeason(response, request.query);
});
router.get('/', function (request, response) {
    getSeasons(response);
});
router.post('/', function (request, response) {
    var season = createSeason(request.body);
    seasonDB.insert(season, function (error, results) {
        if (results) {
            response.status(201).json(results);
        }
        else {
            response.end();
        }
    });
});
module.exports = router;
//# sourceMappingURL=season.router.js.map