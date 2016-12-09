import { Component, OnInit, Input } from "@angular/core";

import { DataTable, DataTableResource } from 'angular-2-data-table';

import { SeasonModel } from "../../models/season/season.model";
import { SeasonService } from "../../services/season/season.service";

@Component({
     moduleId: module.id,
     selector: 'season-datatable',
     templateUrl: 'season.datatable.component.html',
})

export class SeasonDataTableComponent implements OnInit {

    items: Array<SeasonModel> = [];

    itemCount: number = 0;

    classNames: string;

    itemResource: DataTableResource<SeasonModel> = new DataTableResource([]);

    title: string = "Seasons";

    constructor(private seasonService: SeasonService) {}

    ngOnInit() {
        this.getAllItems();

        this.itemCount = this.items.length;
    }

    private getAllItems(): void {
        this.seasonService
            .getAll()
            .subscribe(
                (data:Array<SeasonModel>) => {
                    this.itemResource = new DataTableResource(data);

                    this.itemCount = data.length;

                    this.reloadItems({"offset": 0, "limit": 10});
                },
                error => console.log(error),
                () => console.log('Get all Items complete')
            );
    }

    reloadItems(params) {
        this.itemResource.query(params).then(result => {
            this.items = result;
        });
    }
}