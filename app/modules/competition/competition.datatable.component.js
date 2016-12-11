"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular_2_data_table_1 = require('angular-2-data-table');
var Rx_1 = require('rxjs/Rx');
var competition_service_1 = require("../../services/competition/competition.service");
var season_service_1 = require("../../services/season/season.service");
var sport_service_1 = require("../../services/sport/sport.service");
var CompetitionDataTableComponent = (function () {
    function CompetitionDataTableComponent(competitionService, seasonService, sportService) {
        this.competitionService = competitionService;
        this.seasonService = seasonService;
        this.sportService = sportService;
        this.items = [];
        this.itemCount = 0;
        this.itemResource = new angular_2_data_table_1.DataTableResource([]);
        this.title = "Competitions";
    }
    CompetitionDataTableComponent.prototype.ngOnInit = function () {
        this.getAllItems();
        this.itemCount = this.items.length;
    };
    CompetitionDataTableComponent.prototype.getAllItems = function () {
        var _this = this;
        this.competitionService
            .getAll()
            .subscribe(function (data) {
            var observableBatch = [];
            data.forEach(function (item) {
                observableBatch.push(_this.seasonService.getById(item.seasonId));
                observableBatch.push(_this.sportService.getById(item.sportId));
            });
            Rx_1.Observable.forkJoin(observableBatch).subscribe(function (observables) {
                data.forEach(function (item, index) {
                    item.season = observables[index * 2];
                    item.sport = observables[(index * 2) + 1];
                });
                _this.itemResource = new angular_2_data_table_1.DataTableResource(data);
                _this.itemCount = data.length;
                _this.reloadItems({ "offset": 0, "limit": 10 });
            }, function (err) { return console.error(err); });
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    CompetitionDataTableComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (result) {
            _this.items = result;
        });
    };
    CompetitionDataTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'competition-datatable',
            templateUrl: 'competition.datatable.component.html',
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService, season_service_1.SeasonService, sport_service_1.SportService])
    ], CompetitionDataTableComponent);
    return CompetitionDataTableComponent;
}());
exports.CompetitionDataTableComponent = CompetitionDataTableComponent;
//# sourceMappingURL=competition.datatable.component.js.map