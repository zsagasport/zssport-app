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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'zssport-app',
            template: "\n        <h1>ZsSport Application</h1>\n        <div class=\"col-md-4\">\n            <h2>Matches requested by id</h2>\n            <zssport-match [matchId]=\"201617010901\" [matchType]=\"'lined'\"></zssport-match>\n            <zssport-match [matchId]=\"201617010902\"></zssport-match>\n            <zssport-match [matchId]=\"201617010910\"></zssport-match>\n        </div>\n        <div class=\"col-md-4\">\n             <h2>Matches requested by round</h2>\n             <zssport-round [roundId]=\"2016170208\"></zssport-round>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map