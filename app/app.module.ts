import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { FormsModule,
        ReactiveFormsModule }   from '@angular/forms';

import { DataTableModule }      from 'angular-2-data-table';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { ClubViewComponent }    from './modules/club/club-view.component';
import { CompetitionViewComponent }    from './modules/competition/competition-view.component';
import { SeasonViewComponent }    from './modules/season/season-view.component';
import { SportViewComponent }   from './modules/sport/sport-view.component';
import { ClubService }          from './services/club/club.service';
import { CompetitionService }          from './services/competition/competition.service';
import { SportService }         from './services/sport/sport.service';
import { SeasonService }         from './services/season/season.service';

@NgModule({
  imports:      [ 
    AppRoutingModule,
    BrowserModule,
    DataTableModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ClubViewComponent,
    CompetitionViewComponent,
    SeasonViewComponent,
    SportViewComponent
  ],
  providers: [
    ClubService,
    CompetitionService,
    SeasonService,
    SportService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }