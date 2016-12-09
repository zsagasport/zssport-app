import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

import { SeasonModel } from "../../models/season/season.model";
import { SeasonService } from "../../services/season/season.service";

@Component({
     moduleId: module.id,
     selector: 'zssport-seasonview',
     templateUrl: 'season-view.component.html',
})

export class SeasonViewComponent implements OnInit {

    items: Array<SeasonModel> = [];

    itemCount: number = 0;

    myForm: FormGroup;

    title: string = "Season View";

    constructor(private seasonService: SeasonService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.getAllItems();

        this.myForm = this.formBuilder.group({
            end: ['', [Validators.required]],
            start: ['', [Validators.required]],
            title: ['', [Validators.required]]
        });
    }
 
    private getAllItems(): void {
        this.seasonService
            .getAll()
            .subscribe(
                (data:Array<SeasonModel>) => {
                    this.items = data;
                    this.itemCount = data.length;
                },
                error => console.log(error),
                () => console.log('Get all Items complete')
            );
    }

    private save(seasonModel: SeasonModel) {
        let season = new SeasonModel(seasonModel.id, seasonModel.end, seasonModel.start, seasonModel.title);

        this.seasonService
            .add(season)
            .subscribe((data:SeasonModel) => this.items.push(data),
             error => console.log(error),
                () => console.log('Get all Items complete'));

        console.log(season);
    }
}