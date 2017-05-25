import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-home',
    templateUrl: 'views/home/home.component.html',
    styleUrls: ['views/home/home.component.css']
})
export class HomeComponent {
    name: string = "Home page";
    questions: {};

    constructor(http: Http) {
        http.get("/questions")
            .map(data => data.json())
            .subscribe((data) => this.questions = data);
    }
}