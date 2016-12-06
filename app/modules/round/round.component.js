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
var core_1 = require('@angular/core');
var match_service_1 = require('../../services/match.service');
var round_service_1 = require('../../services/round.service');
var RoundComponent = (function () {
    function RoundComponent(roundService, matchService) {
        this.roundService = roundService;
        this.matchService = matchService;
    }
    RoundComponent.prototype.getRound = function () {
        var _this = this;
        this.roundService.getRound(this.roundId).then(function (round) {
            if (round) {
                _this.round = round;
                _this.title = 'Round ' + _this.round.num;
                _this.matchService.getMatchesByRound(_this.round.num).then(function (matches) { return _this.matches = matches; });
            }
        });
    };
    RoundComponent.prototype.ngOnInit = function () {
        this.getRound();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RoundComponent.prototype, "roundId", void 0);
    RoundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zssport-round',
            templateUrl: 'round.component.html',
            styleUrls: ['round.component.css']
        }), 
        __metadata('design:paramtypes', [round_service_1.RoundService, match_service_1.MatchService])
    ], RoundComponent);
    return RoundComponent;
}());
exports.RoundComponent = RoundComponent;
//# sourceMappingURL=round.component.js.map