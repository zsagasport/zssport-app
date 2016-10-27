import { Component, OnInit, Input } from '@angular/core';

import { Round } from './round.model';
import { Match } from './match.model';

import { MatchService } from './match.service';
import { RoundService } from './round.service';

@Component({
    selector: 'zssport-round',
    template:`
        <article class="round" *ngIf="round">
            <h3>{{title}}</h3>
            <zssport-match [match]="match" *ngFor="let match of matches"></zssport-match>
        </article>
    `
})

export class RoundComponent implements OnInit {
    title: string;
    @Input()
    roundId: number;
    round: Round;
    matches: Match[];

    constructor(private roundService: RoundService, private matchService: MatchService) {
    }

    getRound(): void {
        this.roundService.getRound(
            this.roundId
        ).then (
            round => {
                if (round) {
                    this.round = round;
                    this.title = 'Round ' + this.round.num;

                    this.matchService.getMatchesByRound(
                        this.round.num
                    ).then(
                        matches => this.matches = matches
                    );
                }
            }
        );
    }

    ngOnInit(): void {
        this.getRound();
    }
}