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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var angular_2_data_table_1 = require('angular-2-data-table');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var club_view_component_1 = require('./modules/club/club-view.component');
var club_datatable_component_1 = require('./modules/club/club.datatable.component');
var club_edit_component_1 = require('./modules/club/club.edit.component');
var competition_datatable_component_1 = require('./modules/competition/competition.datatable.component');
var competition_edit_component_1 = require('./modules/competition/competition.edit.component');
var competition_view_component_1 = require('./modules/competition/competition-view.component');
var season_view_component_1 = require('./modules/season/season-view.component');
var sport_view_component_1 = require('./modules/sport/sport-view.component');
var club_service_1 = require('./services/club/club.service');
var competition_service_1 = require('./services/competition/competition.service');
var sport_datatable_component_1 = require("./modules/sport/sport.datatable.component");
var sport_service_1 = require('./services/sport/sport.service');
var season_datatable_component_1 = require('./modules/season/season.datatable.component');
var season_edit_component_1 = require('./modules/season/season.edit.component');
var season_service_1 = require('./services/season/season.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                angular_2_data_table_1.DataTableModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                club_view_component_1.ClubViewComponent,
                club_datatable_component_1.ClubDataTableComponent,
                club_edit_component_1.ClubEditComponent,
                competition_datatable_component_1.CompetitionDataTableComponent,
                competition_edit_component_1.CompetitionEditComponent,
                competition_view_component_1.CompetitionViewComponent,
                season_datatable_component_1.SeasonDataTableComponent,
                season_edit_component_1.SeasonEditComponent,
                season_view_component_1.SeasonViewComponent,
                sport_datatable_component_1.SportDataTableComponent,
                sport_view_component_1.SportViewComponent
            ],
            providers: [
                club_service_1.ClubService,
                competition_service_1.CompetitionService,
                season_service_1.SeasonService,
                sport_service_1.SportService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map