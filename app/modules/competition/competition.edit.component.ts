import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

import { CompetitionDataTableComponent } from "./competition.datatable.component";
import { CompetitionModel } from "../../models/competition/competition.model";
import { CompetitionService } from "../../services/competition/competition.service";

import { SeasonModel } from "../../models/season/season.model";
import { SeasonService } from "../../services/season/season.service";

import { SportModel } from "../../models/sport/sport.model";
import { SportService } from "../../services/sport/sport.service";

@Component({
     moduleId: module.id,
     selector: 'competition-edit',
     templateUrl: 'competition.edit.component.html',
})

export class CompetitionEditComponent implements OnInit {

    countries: Array<String> = ["Hungary", "UK", "Germany"];

    myForm: FormGroup;

    seasons: Array<Object>;

    sports: Array<SportModel>;

    constructor(
        private competitionService: CompetitionService,
        private seasonService: SeasonService,
        private sportService: SportService,
        private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.getSports();
        this.getSeasons();

        this.myForm = this.formBuilder.group({
            country: ['', [Validators.required]],
            seasonId: ['', [Validators.required]],
            sportId: ['', [Validators.required]],
            title: ['', [Validators.required]]
        });
    }

     private getSeasons(): void {
        this.seasonService
            .getAll()
            .subscribe((data:Array<SeasonModel>) => this.seasons = data,
                error => console.log(error),
                () => console.log('Get season Items complete'));
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
            .subscribe(
                (data:CompetitionModel) => {
                },
                error => console.log(error),
                () => console.log('Get all Items complete')
            );

        console.log(competition);
    }
}