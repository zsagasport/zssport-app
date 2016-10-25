import { Component, OnInit } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
    selector: 'zssport-app',
    template:`
        <h1>ZsSport Application</h1>
        <zssport-match [matchId]="2016170910"></zssport-match>  
    `
})

export class AppComponent {
    title: 'ZsSport';
}

