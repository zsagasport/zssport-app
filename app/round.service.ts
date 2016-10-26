import { Injectable } from '@angular/core';

import { Round } from './round.model';

import { ROUNDS } from './mock-rounds';

@Injectable()
export class RoundService {
    getRound(roundId: number): Promise<Round> {
        return Promise.resolve(
            ROUNDS.filter(round => {
                return roundId == round.id;
            })[0]
        );
    }

    getRounds(): Promise<Round[]> {
        return Promise.resolve(ROUNDS);
    }
}