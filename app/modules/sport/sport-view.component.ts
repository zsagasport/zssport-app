import { Component, OnInit } from "@angular/core";

import { SportModel } from "../../models/sport.model";

@Component({
     moduleId: module.id,
     selector: 'zssport-sportview',
     templateUrl: 'sport-view.component.html',
})

export class SportViewComponent implements OnInit {

    sports: Array<SportModel>;

    title: string = "Sport View";

    ngOnInit(): void {
        
    }
}