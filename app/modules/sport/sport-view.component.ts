import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

import { SportDataTableComponent } from "./sport.datatable.component";
import { SportModel } from "../../models/sport/sport.model";
import { SportService } from "../../services/sport/sport.service";

@Component({
     moduleId: module.id,
     selector: 'zssport-sportview',
     templateUrl: 'sport-view.component.html',
})

export class SportViewComponent implements OnInit {

    myForm: FormGroup;

    title: string = "Sport View";

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            title: ['', [Validators.required]]
        });
    }
}