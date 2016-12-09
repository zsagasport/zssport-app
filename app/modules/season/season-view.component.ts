import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataTable, DataTableResource } from 'angular-2-data-table';

import { SeasonDataTableComponent } from "./season.datatable.component";
import { SeasonModel } from "../../models/season/season.model";
import { SeasonService } from "../../services/season/season.service";

@Component({
     moduleId: module.id,
     selector: 'zssport-seasonview',
     templateUrl: 'season-view.component.html',
})

export class SeasonViewComponent implements OnInit {

    myForm: FormGroup;

    title: string = "Season View";

    constructor(private seasonService: SeasonService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            end: ['', [Validators.required]],
            start: ['', [Validators.required]],
            title: ['', [Validators.required]]
        });
    }

    private save(seasonModel: SeasonModel) {
        let season = new SeasonModel(seasonModel.id, seasonModel.end, seasonModel.start, seasonModel.title);

        this.seasonService
            .add(season)
            .subscribe(
                (data:SeasonModel) => {
                },
             error => console.log(error),
                () => console.log('Get all Items complete'));

        console.log(season);
    }
}