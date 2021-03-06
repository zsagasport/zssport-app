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
var router_1 = require('@angular/router');
var club_view_component_1 = require('./modules/club/club-view.component');
var competition_view_component_1 = require('./modules/competition/competition-view.component');
var season_view_component_1 = require('./modules/season/season-view.component');
var sport_view_component_1 = require('./modules/sport/sport-view.component');
var routes = [
    { path: '', redirectTo: '/sportview', pathMatch: 'full' },
    { path: 'clubview', component: club_view_component_1.ClubViewComponent },
    { path: 'competitionview', component: competition_view_component_1.CompetitionViewComponent },
    { path: 'seasonview', component: season_view_component_1.SeasonViewComponent },
    { path: 'sportview', component: sport_view_component_1.SportViewComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map