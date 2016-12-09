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
var season_service_1 = require("../../services/season/season.service");
var SeasonDataTableComponent = (function () {
    function SeasonDataTableComponent(seasonService) {
        this.seasonService = seasonService;
        this.items = [];
        this.itemCount = 0;
        this.itemResource = new angular_2_data_table_1.DataTableResource([]);
        this.title = "Seasons";
    }
    SeasonDataTableComponent.prototype.ngOnInit = function () {
        this.getAllItems();
        this.itemCount = this.items.length;
    };
    SeasonDataTableComponent.prototype.getAllItems = function () {
        var _this = this;
        this.seasonService
            .getAll()
            .subscribe(function (data) {
            _this.itemResource = new angular_2_data_table_1.DataTableResource(data);
            _this.itemCount = data.length;
            _this.reloadItems({ "offset": 0, "limit": 10 });
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    SeasonDataTableComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (result) {
            _this.items = result;
        });
    };
    SeasonDataTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'season-datatable',
            templateUrl: 'season.datatable.component.html',
        }), 
        __metadata('design:paramtypes', [season_service_1.SeasonService])
    ], SeasonDataTableComponent);
    return SeasonDataTableComponent;
}());
exports.SeasonDataTableComponent = SeasonDataTableComponent;
//# sourceMappingURL=season.datatable.component.js.map