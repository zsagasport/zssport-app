import { Component, OnInit, Input } from '@angular/core';

import { RoundModel } from '../../models/round.model';
import { MatchModel } from '../../models/match.model';

import { MatchService } from '../../services/match.service';
import { RoundService } from '../../services/round.service';

@Component({
    moduleId: module.id,
    selector: 'zssport-round',
    templateUrl: 'round.component.html',
    styleUrls: ['round.component.css']
})

export class RoundComponent implements OnInit {
    title: string;
    @Input()
    roundId: number;
    round: RoundModel;
    matches: MatchModel[];

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