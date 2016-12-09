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
var forms_1 = require('@angular/forms');
var competition_model_1 = require("../../models/competition/competition.model");
var competition_service_1 = require("../../services/competition/competition.service");
var season_service_1 = require("../../services/season/season.service");
var sport_service_1 = require("../../services/sport/sport.service");
var CompetitionViewComponent = (function () {
    function CompetitionViewComponent(competitionService, seasonService, sportService, formBuilder) {
        this.competitionService = competitionService;
        this.seasonService = seasonService;
        this.sportService = sportService;
        this.formBuilder = formBuilder;
        this.countries = ["Hungary", "UK"];
        this.items = [];
        this.itemCount = 0;
        this.title = "Competition View";
    }
    CompetitionViewComponent.prototype.ngOnInit = function () {
        this.getAllItems();
        this.getSports();
        this.getSeasons();
        this.myForm = this.formBuilder.group({
            country: ['', [forms_1.Validators.required]],
            seasonId: ['', [forms_1.Validators.required]],
            sportId: ['', [forms_1.Validators.required]],
            title: ['', [forms_1.Validators.required]]
        });
    };
    CompetitionViewComponent.prototype.getAllItems = function () {
        var _this = this;
        this.competitionService
            .getAll()
            .subscribe(function (data) {
            _this.items = data;
            _this.itemCount = data.length;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    CompetitionViewComponent.prototype.getSeasons = function () {
        var _this = this;
        this.seasonService
            .getAll()
            .subscribe(function (data) { return _this.seasons = data; }, function (error) { return console.log(error); }, function () { return console.log('Get season Items complete'); });
    };
    CompetitionViewComponent.prototype.getSports = function () {
        var _this = this;
        this.sportService
            .getAll()
            .subscribe(function (data) { return _this.sports = data; }, function (error) { return console.log(error); }, function () { return console.log('Get sport Items complete'); });
    };
    CompetitionViewComponent.prototype.save = function (competitionModel) {
        var _this = this;
        var competition = new competition_model_1.CompetitionModel(competitionModel.id, competitionModel.country, competitionModel.seasonId, competitionModel.sportId, competitionModel.title);
        this.competitionService
            .add(competition)
            .subscribe(function (data) { return _this.items.push(data); }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
        console.log(competition);
    };
    CompetitionViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zssport-competitionview',
            templateUrl: 'competition-view.component.html',
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService, season_service_1.SeasonService, sport_service_1.SportService, forms_1.FormBuilder])
    ], CompetitionViewComponent);
    return CompetitionViewComponent;
}());
exports.CompetitionViewComponent = CompetitionViewComponent;
//# sourceMappingURL=competition-view.component.js.map