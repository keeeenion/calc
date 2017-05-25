import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Http } from "@angular/http";

@Component({
    selector: 'my-all',
    templateUrl: 'views/all/all.component.html'
})
export class AllComponent {
    flows: any = [];
    questions: any = [];

    constructor(http: Http) {
        http.get("/questions")
            .map(data => data.json())
            .subscribe((data) => this.questions = data);
            
        http.get("/answers")
            .map(data => data.json())
            .subscribe((data) => {
                for (var d of data) {
                    this.flows.push(JSON.parse(d.flow))
                }
            });

    }

}