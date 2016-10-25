import { Injectable } from "@angular/core";

import { Match } from "./match.model";

import { MATCHES } from "./mock-matches";

@Injectable()
export class MatchService {
    getMatch(matchId: number): Promise<Match> {
        return Promise.resolve(
            MATCHES.filter(match => {
                return matchId == match.id;
            })[0]
        );
    }

    getMatches(): Promise<Match[]> {
        return Promise.resolve(MATCHES);
    }

    getMatchesByRound(round: number): Promise<Match[]> {
         return Promise.resolve(
             MATCHES.filter(match => {
                return round == match.round;
            })
        );
    }
}