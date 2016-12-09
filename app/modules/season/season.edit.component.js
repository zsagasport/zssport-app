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
var SeasonEditComponent = (function () {
    function SeasonEditComponent(seasonService, formBuilder) {
        this.seasonService = seasonService;
        this.formBuilder = formBuilder;
    }
    SeasonEditComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            end: ['', [forms_1.Validators.required]],
            start: ['', [forms_1.Validators.required]],
            title: ['', [forms_1.Validators.required]]
        });
    };
    SeasonEditComponent.prototype.save = function (seasonModel) {
        var season = new season_model_1.SeasonModel(seasonModel.id, seasonModel.end, seasonModel.start, seasonModel.title);
        this.seasonService
            .add(season)
            .subscribe(function (data) {
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
        console.log(season);
    };
    SeasonEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'season-edit',
            templateUrl: 'season.edit.component.html',
        }), 
        __metadata('design:paramtypes', [season_service_1.SeasonService, forms_1.FormBuilder])
    ], SeasonEditComponent);
    return SeasonEditComponent;
}());
exports.SeasonEditComponent = SeasonEditComponent;
//# sourceMappingURL=season.edit.component.js.map