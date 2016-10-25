import { Component, OnInit, Input } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
    selector: 'zssport-match',
    template:`
        <article class="match" *ngIf="match">
            <h1>{{title}}</h1>
            <div class="match">
                <div class="teams">
                    <label>{{match.homeClub}}</label> - <label>{{match.awayClub}}</label>
                </div>
                <div class="results finished" *ngIf="match.finished">
                    <span>{{match.homeGoals}}</span>
                    <span>-</span>
                    <span>{{match.awayGoals}}</span>
                </div>
            </div>
        </article>
    `
})

export class MatchComponent implements OnInit {
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
        this.getMatch();
    }
}