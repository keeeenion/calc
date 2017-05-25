import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
    selector: 'summary',
    templateUrl: 'templates/summary.component.html'
})
export class SummaryComponent implements OnInit {
    @Input() questions: any;
    @Input() flow: any;
    @Input() preview: any = false;

    modules: Array<object> = [];
    total: Number = 0;
    xhr: Http;

    @Output() redoEvent = new EventEmitter<any>();

    constructor(http: Http) {
        this.xhr = http
    }

    ngOnInit() {
        this.postAnswers(this.flow)
        this.createTable()
    }

    postAnswers(flow: any) {
        if (!this.preview) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            this.xhr.post("/answers", flow, options)
                .map(data => data.json())
                .subscribe();
        }
    } 

    createTable() {
        this.modules = [];
        this.total = 0;
        for (var key in this.flow) {
            if (this.flow.hasOwnProperty(key)) {
                for (var a of this.questions[key].answers) {
                    if (a.a_id == this.flow[key]) {
                        var amount = a.amount
                    }
                }
                this.modules.push({
                    "module": this.questions[key].module,
                    "price": amount,
                    "id": key
                })
                this.total += amount
            }
        }
    }

    redo(id: any) {
        this.redoEvent.emit(id)
    }

}