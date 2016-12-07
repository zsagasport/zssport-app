import { Injectable } from "@angular/core";

import { MatchModel } from "../../models/match/match.model";

import { MATCHES } from "../../mocks/mock-matches";

@Injectable()
export class MatchService {
    getMatch(matchId: number): Promise<MatchModel> {
        return Promise.resolve(
            MATCHES.filter(match => {
                return matchId == match.id;
            })[0]
        );
    }

    getMatches(): Promise<MatchModel[]> {
        return Promise.resolve(MATCHES);
    }

    getMatchesByRound(round: number): Promise<MatchModel[]> {
         return Promise.resolve(
             MATCHES.filter(match => {
                return round == match.round;
            })
        );
    }
}