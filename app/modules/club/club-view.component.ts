import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

import { ClubModel } from "../../models/club/club.model";
import { ClubService } from "../../services/club/club.service";
import { ClubDataTableComponent } from "./club.datatable.component";

@Component({
     moduleId: module.id,
     selector: 'zssport-clubview',
     templateUrl: 'club-view.component.html',
})

export class ClubViewComponent implements OnInit {

    clubs: Array<ClubModel> = [];

    myForm: FormGroup;

    title: string = "Club View";

    constructor(private clubService: ClubService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            title: ['', [Validators.required]]
        });
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