"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var base_service_1 = require("../base.service");
var configuration_1 = require("../util/configuration");
var SeasonService = (function (_super) {
    __extends(SeasonService, _super);
    function SeasonService(http) {
        _super.call(this, new configuration_1.Configuration());
        this.http = http;
        this.actionUrl = this.configuration.serverWithApiUrl + 'season';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    SeasonService.prototype.add = function (baseModel) {
        var toAdd = baseModel.stringify();
        return this.http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SeasonService.prototype.getAll = function () {
        return this.http.get(this.actionUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SeasonService.prototype.getById = function (id) {
        var params = new http_1.URLSearchParams();
        params.set('_id', String(id));
        return this.http.get(this.actionUrl + '/id', { 'search': params })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SeasonService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    SeasonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SeasonService);
    return SeasonService;
}(base_service_1.BaseService));
exports.SeasonService = SeasonService;
//# sourceMappingURL=season.service.js.map