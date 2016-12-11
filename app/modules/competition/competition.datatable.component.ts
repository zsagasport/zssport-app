import { Component, OnInit, Input } from "@angular/core";

import { DataTable, DataTableResource } from 'angular-2-data-table';

import { Observable } from 'rxjs/Rx';

import { CompetitionModel } from "../../models/competition/competition.model";
import { CompetitionService } from "../../services/competition/competition.service";
import { SeasonModel } from "../../models/season/season.model";
import { SeasonService } from "../../services/season/season.service";
import { SportModel } from "../../models/sport/sport.model";
import { SportService } from "../../services/sport/sport.service";

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

    constructor(private competitionService: CompetitionService, private seasonService: SeasonService, private sportService: SportService) {}

    ngOnInit() {
        this.getAllItems();

        this.itemCount = this.items.length;
    }

    private getAllItems(): void {
        this.competitionService
            .getAll()
            .subscribe(
                (data:Array<CompetitionModel>) => {
                    let observableBatch = [];

                    data.forEach(item => {
                        observableBatch.push(this.seasonService.getById(item.seasonId));
                        observableBatch.push(this.sportService.getById(item.sportId));
                    });

                    Observable.forkJoin(
                        observableBatch
                    ).subscribe(
                        observables => {
                            data.forEach(
                                (item, index) => {
                                    item.season = <SeasonModel>observables[index * 2];
                                    item.sport = <SportModel>observables[(index * 2) + 1];
                                }
                            );

                            this.itemResource = new DataTableResource(data);

                            this.itemCount = data.length;

                            this.reloadItems({"offset": 0, "limit": 10});
                        },
                        err => console.error(err)
                    );
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