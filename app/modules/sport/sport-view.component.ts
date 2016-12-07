import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SportModel } from "../../models/sport/sport.model";
import { SportService } from "../../services/sport/sport.service";

@Component({
     moduleId: module.id,
     selector: 'zssport-sportview',
     templateUrl: 'sport-view.component.html',
})

export class SportViewComponent implements OnInit {

    myForm: FormGroup;

    sports: Array<SportModel>;

    title: string = "Sport View";

     constructor(private sportService: SportService, private formBuilder: FormBuilder) {}

     ngOnInit() {
        this.getAllItems();

        this.myForm = this.formBuilder.group({
            title: ['', [Validators.required]]
        });
    }
 
    private getAllItems(): void {
        this.sportService
            .getAll()
            .subscribe((data:Array<SportModel>) => this.sports = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }

}