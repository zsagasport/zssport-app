import { Component, OnInit, Input } from "@angular/core";

import { DataTable, DataTableResource } from 'angular-2-data-table';

import { SportModel } from "../../models/sport/sport.model";
import { SportService } from "../../services/sport/sport.service";

@Component({
     moduleId: module.id,
     selector: 'sport-datatable',
     templateUrl: 'sport.datatable.component.html',
})

export class SportDataTableComponent implements OnInit {

    items: Array<SportModel> = [];

    itemCount: number = 0;

    classNames: string;

    itemResource: DataTableResource<SportModel> = new DataTableResource([]);

    title: string = "Sports";

    constructor(private sportService: SportService) {}

    ngOnInit() {
        this.getAllItems();

        this.itemCount = this.items.length;
    }

    private getAllItems(): void {
        this.sportService
            .getAll()
            .subscribe(
                (data:Array<SportModel>) => {
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