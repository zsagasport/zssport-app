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
var club_model_1 = require("../../models/club/club.model");
var club_service_1 = require("../../services/club/club.service");
var ClubEditComponent = (function () {
    function ClubEditComponent(clubService, formBuilder) {
        this.clubService = clubService;
        this.formBuilder = formBuilder;
        this.clubs = [];
        this.countries = ["Hungary", "UK"];
        this.title = "Club View";
    }
    ClubEditComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            country: ['', [forms_1.Validators.required]],
            title: ['', [forms_1.Validators.required]]
        });
    };
    ClubEditComponent.prototype.save = function (clubModel) {
        var club = new club_model_1.ClubModel(clubModel.id, clubModel.country, clubModel.title);
        this.clubService
            .add(club)
            .subscribe(function (data) {
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
        console.log(club);
    };
    ClubEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'club-edit',
            templateUrl: 'club.edit.component.html',
        }), 
        __metadata('design:paramtypes', [club_service_1.ClubService, forms_1.FormBuilder])
    ], ClubEditComponent);
    return ClubEditComponent;
}());
exports.ClubEditComponent = ClubEditComponent;
//# sourceMappingURL=club.edit.component.js.map