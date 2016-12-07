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
var season_model_1 = require("../../models/season/season.model");
var season_service_1 = require("../../services/season/season.service");
var SeasonViewComponent = (function () {
    function SeasonViewComponent(seasonService, formBuilder) {
        this.seasonService = seasonService;
        this.formBuilder = formBuilder;
        this.title = "Season View";
    }
    SeasonViewComponent.prototype.ngOnInit = function () {
        this.getAllItems();
        this.myForm = this.formBuilder.group({
            end: ['', [forms_1.Validators.required]],
            start: ['', [forms_1.Validators.required]],
            title: ['', [forms_1.Validators.required]]
        });
    };
    SeasonViewComponent.prototype.getAllItems = function () {
        var _this = this;
        this.seasonService
            .getAll()
            .subscribe(function (data) { return _this.seasons = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    SeasonViewComponent.prototype.save = function (seasonModel) {
        var _this = this;
        var season = new season_model_1.SeasonModel(seasonModel.id, seasonModel.end, seasonModel.start, seasonModel.title);
        this.seasonService
            .add(season)
            .subscribe(function (data) { return _this.seasons.push(data); }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
        console.log(season);
    };
    SeasonViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zssport-seasonview',
            templateUrl: 'season-view.component.html',
        }), 
        __metadata('design:paramtypes', [season_service_1.SeasonService, forms_1.FormBuilder])
    ], SeasonViewComponent);
    return SeasonViewComponent;
}());
exports.SeasonViewComponent = SeasonViewComponent;
//# sourceMappingURL=season-view.component.js.map