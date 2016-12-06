import { Injectable } from '@angular/core';

import { RoundModel } from '../models/round.model';

import { ROUNDS } from '../mocks/mock-rounds';

@Injectable()
export class RoundService {
    getRound(roundId: number): Promise<RoundModel> {
        return Promise.resolve(
            ROUNDS.filter(round => {
                return roundId == round.id;
            })[0]
        );
    }

    getRounds(): Promise<RoundModel[]> {
        return Promise.resolve(ROUNDS);
    }
}