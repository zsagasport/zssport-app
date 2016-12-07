import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CompetitionModel } from "../../models/competition/competition.model";
import { CompetitionService } from "../../services/competition/competition.service";

import { SportModel } from "../../models/sport/sport.model";
import { SportService } from "../../services/sport/sport.service";

@Component({
     moduleId: module.id,
     selector: 'zssport-competitionview',
     templateUrl: 'competition-view.component.html',
})

export class CompetitionViewComponent implements OnInit {
    countries: Array<String> = ["Hungary", "UK"];

    competitions: Array<CompetitionModel>;

    myForm: FormGroup;

    seasons: Array<Object>;

    sports: Array<SportModel>;

    title: string = "Competition View";

    constructor(
        private competitionService: CompetitionService,
        private sportService: SportService,
        private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.getAllItems();
        this.getSports();

        this.myForm = this.formBuilder.group({
            country: ['', [Validators.required]],
            season: ['', [Validators.required]],
            sport: ['', [Validators.required]],
            title: ['', [Validators.required]]
        });
    }
 
    private getAllItems(): void {
        this.competitionService
            .getAll()
            .subscribe((data:Array<CompetitionModel>) => this.competitions = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }

    private getSports(): void {
        this.sportService
            .getAll()
            .subscribe((data:Array<SportModel>) => this.sports = data,
                error => console.log(error),
                () => console.log('Get sport Items complete'));
    }

    private save(competitionModel: CompetitionModel) {
        let competition = new CompetitionModel(competitionModel.id, competitionModel.country, competitionModel.seasonId, competitionModel.sportId, competitionModel.title);

        this.competitionService
            .add(competition)
            .subscribe((data:CompetitionModel) => this.competitions.push(data),
             error => console.log(error),
                () => console.log('Get all Items complete'));

        console.log(competition);
    }
}