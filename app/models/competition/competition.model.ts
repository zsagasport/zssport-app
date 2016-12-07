import { BaseModel } from '../base.model';

export class CompetitionModel extends BaseModel {
    country: string;
    title: string;
    seasonId: number;
    sportId: number;

    constructor(id: number = 0, country: string, seasonId: number, sportId: number, title: string) {
        super(id);

        this.title = title;
    }

    stringify(): string {
        return JSON.stringify({
            _id:    this.id,
            country: this.country,
            seasonId: this.seasonId,
            sportId: this.sportId,
            title:  this.title
        });
    }
}