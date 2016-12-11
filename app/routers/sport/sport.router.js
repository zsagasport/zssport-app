var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/zssport');
var sportDB = db.get('sport');
var createSport = function (body) {
    return {
        title: body.title
    };
};
var getSports = function (response) {
    sportDB.find({}, function (error, results) {
        if (results) {
            response.json(results);
        }
        else {
            response.end();
        }
    });
};
var getSport = function (response, query) {
    sportDB.find(query, function (error, results) {
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
router.get('/', function (request, response) {
    getSports(response);
});
router.get('/id', function (request, response) {
    getSport(response, request.query);
});
router.post('/', function (request, response) {
    var sport = createSport(request.body);
    sportDB.insert(sport, function (error, results) {
        if (results) {
            response.status(201).json(results);
        }
        else {
            response.end();
        }
    });
});
module.exports = router;
//# sourceMappingURL=sport.router.js.map