import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubViewComponent }   from './modules/club/club-view.component';
import { SportViewComponent }      from './modules/sport/sport-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/sportview', pathMatch: 'full' },
  { path: 'clubview',  component: ClubViewComponent },
  { path: 'sportview',     component: SportViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}