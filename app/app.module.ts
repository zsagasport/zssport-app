import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { FormsModule,
        ReactiveFormsModule }   from '@angular/forms';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { ClubViewComponent }    from './modules/club/club-view.component';
import { SportViewComponent }   from './modules/sport/sport-view.component';
import { ClubService }          from './services/club/club.service';
import { SportService }         from './services/sport.service';


@NgModule({
  imports:      [ 
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ClubViewComponent,
    SportViewComponent
  ],
  providers: [
    ClubService,
    SportService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }