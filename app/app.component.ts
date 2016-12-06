import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'zssport-app',
    template:`
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                <li><a routerLink="/sportview" routerLinkActive="active">Sport View</a></li>
                <li><a routerLink="/clubview" routerLinkActive="active">Club View</a></li>
                </ul>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title: string = 'ZsSport';
}