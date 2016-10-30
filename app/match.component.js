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
var match_model_1 = require("./match.model");
var match_service_1 = require("./match.service");
var MatchComponent = (function () {
    function MatchComponent(matchService) {
        this.matchService = matchService;
    }
    MatchComponent.prototype.getMatch = function () {
        var _this = this;
        this.matchService.getMatch(this.matchId).then(function (match) { return _this.match = match; });
    };
    MatchComponent.prototype.ngOnInit = function () {
        if (this.matchId) {
            this.getMatch();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', match_model_1.Match)
    ], MatchComponent.prototype, "match", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MatchComponent.prototype, "matchId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MatchComponent.prototype, "matchType", void 0);
    MatchComponent = __decorate([
        core_1.Component({
            selector: 'zssport-match',
            template: "\n        <div class=\"match-content\" *ngIf=\"match\" [ngSwitch]=\"matchType\">\n            <template [ngSwitchCase]=\"'lined'\">\n                <div class=\"home-team {{match.homeGoals > match.awayGoals ? 'winner' : ''}}\" >\n                    <label class=\"home-club\">{{match.homeClub}}</label>\n                    <span class=\"goals\">{{match.homeGoals}}</span>\n                </div>\n                <div class=\"away-team {{match.awayGoals > match.homeGoals ? 'winner' : ''}}\" *ngIf=\"match.finished\">\n                    <label class=\"away-club\">{{match.awayClub}}</label>\n                    <span class=\"goals\">{{match.awayGoals}}</span>\n                </div>\n            </template>\n            <template ngSwitchDefault>\n                <div class=\"teams\">\n                    <label class=\"home-club\">{{match.homeClub}}</label>\n                    <label class=\"away-club\">{{match.awayClub}}</label>\n                </div>\n                <div class=\"results finished\" *ngIf=\"match.finished\">\n                    <span>{{match.homeGoals}}</span>\n                    <span>-</span>\n                    <span>{{match.awayGoals}}</span>\n                </div>\n            </template>\n        </div>\n"
        }), 
        __metadata('design:paramtypes', [match_service_1.MatchService])
    ], MatchComponent);
    return MatchComponent;
}());
exports.MatchComponent = MatchComponent;
//# sourceMappingURL=match.component.js.map