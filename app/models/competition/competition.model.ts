import { BaseModel } from '../base.model';
import { SeasonModel } from '../season/season.model';
import { SeasonService } from '../../services/season/season.service';
import { SportModel } from '../sport/sport.model';
import { SportService } from '../../services/sport/sport.service';
import { Http } from '@angular/http';

export class CompetitionModel extends BaseModel {
    country: string;
    title: string;
    seasonId: number;
    sportId: number;
    season?: SeasonModel;
    sport?: SportModel;

    constructor(id: number = 0, country: string, seasonId: number, sportId: number, title: string) {
        super(id);

        this.country = country;
        this.seasonId = seasonId;
        this.sportId = sportId;
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