import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

import { ClubModel } from "../../models/club/club.model";
import { ClubService } from "../../services/club/club.service";

@Component({
     moduleId: module.id,
     selector: 'zssport-clubview',
     templateUrl: 'club-view.component.html',
})

export class ClubViewComponent implements OnInit {

    items: Array<ClubModel> = [];

    itemCount: number = 0;

    itemResource: DataTableResource<ClubModel> = new DataTableResource([]);

    myForm: FormGroup;

    title: string = "Club View";

    constructor(private clubService: ClubService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.getAllItems();

        this.myForm = this.formBuilder.group({
            title: ['', [Validators.required]]
        });
    }

     reloadItems(params) {
        this.itemResource.query(params).then(result => {
            this.items = result;
        });
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

    private save(clubModel: ClubModel) {
        let club = new ClubModel(clubModel.id, clubModel.title);

        this.clubService
            .add(club)
            .subscribe(
                (data:ClubModel) => 
                {
                },
             error => console.log(error),
                () => console.log('Get all Items complete'));

        console.log(club);
    }
}