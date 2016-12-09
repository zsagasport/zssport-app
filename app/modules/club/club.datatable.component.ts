import { Component, OnInit, Input } from "@angular/core";

import { DataTable, DataTableResource } from 'angular-2-data-table';

import { ClubModel } from "../../models/club/club.model";
import { ClubService } from "../../services/club/club.service";

@Component({
     moduleId: module.id,
     selector: 'club-datatable',
     templateUrl: 'club.datatable.component.html',
})

export class ClubDataTableComponent implements OnInit {

    items: Array<ClubModel> = [];

    itemCount: number = 0;

    classNames: string;

    itemResource: DataTableResource<ClubModel> = new DataTableResource([]);

    title: string = "Clubs";

    constructor(private clubService: ClubService) {}

    ngOnInit() {
        this.getAllItems();

        this.itemCount = this.items.length;
    }

    private getAllItems(): void {
        this.clubService
            .getAll()
            .subscribe(
                (data:Array<ClubModel>) => {
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