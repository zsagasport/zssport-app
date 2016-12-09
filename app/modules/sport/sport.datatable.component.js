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
var sport_service_1 = require("../../services/sport/sport.service");
var SportDataTableComponent = (function () {
    function SportDataTableComponent(sportService) {
        this.sportService = sportService;
        this.items = [];
        this.itemCount = 0;
        this.itemResource = new angular_2_data_table_1.DataTableResource([]);
        this.title = "Sports";
    }
    SportDataTableComponent.prototype.ngOnInit = function () {
        this.getAllItems();
        this.itemCount = this.items.length;
    };
    SportDataTableComponent.prototype.getAllItems = function () {
        var _this = this;
        this.sportService
            .getAll()
            .subscribe(function (data) {
            _this.itemResource = new angular_2_data_table_1.DataTableResource(data);
            _this.itemCount = data.length;
            _this.reloadItems({ "offset": 0, "limit": 10 });
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    SportDataTableComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (result) {
            _this.items = result;
        });
    };
    SportDataTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sport-datatable',
            templateUrl: 'sport.datatable.component.html',
        }), 
        __metadata('design:paramtypes', [sport_service_1.SportService])
    ], SportDataTableComponent);
    return SportDataTableComponent;
}());
exports.SportDataTableComponent = SportDataTableComponent;
//# sourceMappingURL=sport.datatable.component.js.map