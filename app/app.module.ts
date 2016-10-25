import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { MatchService }   from './match.service';
import { MatchComponent } from './match.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MatchComponent
  ],
  providers: [
    MatchService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }