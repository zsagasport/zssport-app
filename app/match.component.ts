import { Component, OnInit, Input } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
    selector: 'zssport-match',
    template:`
        <div class="match-content" *ngIf="match">
            <div class="teams">
                <label class="home-club">{{match.homeClub}}</label>
                <span> - </span>
                <label class="away-club">{{match.awayClub}}</label>
            </div>
            <div class="results finished" *ngIf="match.finished">
                <span>{{match.homeGoals}}</span>
                <span>-</span>
                <span>{{match.awayGoals}}</span>
            </div>
        </div>
`
})

export class MatchComponent implements OnInit {
    @Input()
    match: Match;
    @Input()
    matchId: number;
    title: 'Match';

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