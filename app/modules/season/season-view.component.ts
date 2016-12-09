import { Component, OnInit } from "@angular/core";

@Component({
     moduleId: module.id,
     selector: 'zssport-seasonview',
     templateUrl: 'season-view.component.html',
})

export class SeasonViewComponent implements OnInit {

    title: string = "Season View";

    constructor() {}

    ngOnInit() {
    }
}