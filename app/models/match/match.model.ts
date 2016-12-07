import { BaseModel } from "../base.model";

export class MatchModel extends BaseModel {
    awayClub: string;
    awayGoals: number;
    date: string;
    finished: boolean;
    homeClub: string;
    homeGoals: number;
    round: number;

    stringify(): string {
        return JSON.stringify({
            _id:        this.id,
            awayClub:   this.awayClub,
            awayGoals:  this.awayGoals,
            date:       this.date,
            finished:   this.finished,
            homeClub:   this.homeClub,
            homeGoals:  this.homeGoals,
            round:      this.round
        });
    }
}