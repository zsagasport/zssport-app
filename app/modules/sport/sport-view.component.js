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
var sport_service_1 = require("../../services/sport/sport.service");
var SportViewComponent = (function () {
    function SportViewComponent(sportService, formBuilder) {
        this.sportService = sportService;
        this.formBuilder = formBuilder;
        this.title = "Sport View";
    }
    SportViewComponent.prototype.ngOnInit = function () {
        this.getAllItems();
        this.myForm = this.formBuilder.group({
            title: ['', [forms_1.Validators.required]]
        });
    };
    SportViewComponent.prototype.getAllItems = function () {
        var _this = this;
        this.sportService
            .getAll()
            .subscribe(function (data) { return _this.sports = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    SportViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zssport-sportview',
            templateUrl: 'sport-view.component.html',
        }), 
        __metadata('design:paramtypes', [sport_service_1.SportService, forms_1.FormBuilder])
    ], SportViewComponent);
    return SportViewComponent;
}());
exports.SportViewComponent = SportViewComponent;
//# sourceMappingURL=sport-view.component.js.map