import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClubModel } from "../../models/club.model";
import { ClubService } from "../../services/club/club.service";

@Component({
     moduleId: module.id,
     selector: 'zssport-clubview',
     templateUrl: 'club-view.component.html',
})

export class ClubViewComponent implements OnInit {

    clubs: Array<ClubModel>;

    myForm: FormGroup;

    title: string = "Club View";

    constructor(private clubService: ClubService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.getAllItems();

        this.myForm = this.formBuilder.group({
            title: ['', [Validators.required]]
        });
    }
 
    private getAllItems(): void {
        this.clubService
            .getAll()
            .subscribe((data:Array<ClubModel>) => this.clubs = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }

    private save(clubModel: ClubModel) {
        let club = new ClubModel(clubModel.id, clubModel.title);

        this.clubService
            .add(club)
            .subscribe((data:ClubModel) => this.clubs.push(data),
             error => console.log(error),
                () => console.log('Get all Items complete'));

        console.log(club);
    }
}