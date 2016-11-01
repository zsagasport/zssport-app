import { Component, OnInit } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
    selector: 'zssport-app',
    template:`
        <h1>ZsSport Application</h1>
        <div class="col-md-4">
            <h2>Matches requested by id</h2>
            <zssport-match [matchId]="201617010801" [matchType]="'lined'"></zssport-match>
            <zssport-match [matchId]="201617010802"></zssport-match>
            <zssport-match [matchId]="201617010810"></zssport-match>
        </div>
        <div class="col-md-4">
             <h2>Matches requested by round</h2>
             <zssport-round [roundId]="2016170208"></zssport-round>
        </div>
         <div class="col-md-4">
             <h2>Matches requested by round</h2>
             <zssport-round [roundId]="2016170209"></zssport-round>
        </div>
    `
})

export class AppComponent {
    title: 'ZsSport';
}