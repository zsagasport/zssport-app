import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubViewComponent }   from './modules/club/club-view.component';
import { CompetitionViewComponent }      from './modules/competition/competition-view.component';
import { SeasonViewComponent }      from './modules/season/season-view.component';
import { SportViewComponent }      from './modules/sport/sport-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/sportview', pathMatch: 'full' },
  { path: 'clubview', component: ClubViewComponent },
  { path: 'competitionview', component: CompetitionViewComponent },
  { path: 'seasonview', component: SeasonViewComponent },
  { path: 'sportview', component: SportViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}