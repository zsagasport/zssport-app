import { Component, OnInit } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
    selector: 'zssport-app',
    template:`
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <h1>{{title}}</h1>
            </div>
        </nav>

        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h2>Matches requested by id</h2>
                </div>
                <div class="panel-body">
                    <zssport-match [matchId]="201617010801" [matchType]="'lined'"></zssport-match>
                    <zssport-match [matchId]="201617010802"></zssport-match>
                    <zssport-match [matchId]="201617010810"></zssport-match>
                </div>
            </div>
        </div>
        <div class="col-md-4">
             <div class="panel panel-default">
                <div class="panel-heading">
                     <h2>Matches requested by round</h2>
                </div>
                <div class="panel-body">
                   <zssport-round [roundId]="2016170208"></zssport-round>
                </div>
            </div>
        </div>
         <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                      <h2>Matches requested by round</h2>
                </div>
                <div class="panel-body">
                  <zssport-round [roundId]="2016170209"></zssport-round>
                </div>
            </div>
        </div>
    `
})

export class AppComponent {
    title: string = 'ZsSport';
}