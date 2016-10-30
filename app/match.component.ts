import { Component, OnInit, Input } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
    selector: 'zssport-match',
    template:`
        <div class="match-content" *ngIf="match" [ngSwitch]="matchType">
            <template [ngSwitchCase]="'lined'">
                <div class="home-team {{match.homeGoals > match.awayGoals ? 'winner' : ''}}" >
                    <label class="home-club">{{match.homeClub}}</label>
                    <span class="goals">{{match.homeGoals}}</span>
                </div>
                <div class="away-team {{match.awayGoals > match.homeGoals ? 'winner' : ''}}" *ngIf="match.finished">
                    <label class="away-club">{{match.awayClub}}</label>
                    <span class="goals">{{match.awayGoals}}</span>
                </div>
            </template>
            <template ngSwitchDefault>
                <div class="teams">
                    <label class="home-club">{{match.homeClub}}</label>
                    <label class="away-club">{{match.awayClub}}</label>
                </div>
                <div class="results finished" *ngIf="match.finished">
                    <span>{{match.homeGoals}}</span>
                    <span>-</span>
                    <span>{{match.awayGoals}}</span>
                </div>
            </template>
        </div>
`
})

export class MatchComponent implements OnInit {
    @Input()
    match: Match;
    @Input()
    matchId: number;
    title: 'Match';
    @Input()
    matchType: string;

    constructor(private matchService: MatchService) {
    }

    getMatch(): void {
        this.matchService.getMatch(this.matchId).then(match => this.match = match);
    }

    ngOnInit(): void {
        if(this.matchId) {
            this.getMatch();
        }
    }
}