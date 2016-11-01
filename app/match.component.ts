import { Component, OnInit, Input } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
    moduleId: module.id,
    selector: 'zssport-match',
    templateUrl: 'match.component.html',
    styleUrls: ['match.component.css']
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

    isHomeWinner(): boolean {
        return this.match.homeGoals > this.match.awayGoals;
    }

    isAwayWinner(): boolean {
        return this.match.awayGoals > this.match.homeGoals;
    }

    ngOnInit(): void {
        if(this.matchId) {
            this.getMatch();
        }
    }
}