import { Component, OnInit, Input } from "@angular/core";

import { DataTable, DataTableResource } from 'angular-2-data-table';

import { CompetitionModel } from "../../models/competition/competition.model";
import { CompetitionService } from "../../services/competition/competition.service";

@Component({
     moduleId: module.id,
     selector: 'competition-datatable',
     templateUrl: 'competition.datatable.component.html',
})

export class CompetitionDataTableComponent implements OnInit {

    items: Array<CompetitionModel> = [];

    itemCount: number = 0;

    classNames: string;

    itemResource: DataTableResource<CompetitionModel> = new DataTableResource([]);

    title: string = "Competitions";

    constructor(private competitionService: CompetitionService) {}

    ngOnInit() {
        this.getAllItems();

        this.itemCount = this.items.length;
    }

    private getAllItems(): void {
        this.competitionService
            .getAll()
            .subscribe(
                (data:Array<CompetitionModel>) => {
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