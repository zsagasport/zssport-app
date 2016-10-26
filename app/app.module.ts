import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { MatchService }   from './match.service';
import { RoundService }   from './round.service';
import { MatchComponent } from './match.component';
import { RoundComponent }  from './round.component'

@NgModule({
  imports:      [ 
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MatchComponent,
    RoundComponent
  ],
  providers: [
    MatchService,
    RoundService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }