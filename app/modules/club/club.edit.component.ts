import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClubModel } from "../../models/club/club.model";
import { ClubService } from "../../services/club/club.service";

@Component({
     moduleId: module.id,
     selector: 'club-edit',
     templateUrl: 'club.edit.component.html',
})

export class ClubEditComponent implements OnInit {
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