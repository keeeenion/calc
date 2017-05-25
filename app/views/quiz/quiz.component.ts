import { Component, ViewChild } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { SummaryComponent } from '../../components/summary.component';

@Component({
    selector: 'my-quiz',
    templateUrl: 'views/quiz/quiz.component.html'
})
export class QuizComponent {
    questions: object = {};
    flow: object =  {};

    activeQuestion: number;
    hasNext: boolean = false;

    redo: boolean = false;
    done: boolean = false;

    @ViewChild(SummaryComponent)
    private summaryComponent: SummaryComponent;

    constructor(http: Http) {
        http.get("/questions")
            .map(data => data.json())
            .subscribe((data) => {
                this.questions = data;
                this.activeQuestion = parseInt(Object.keys(this.questions)[0]);
                if (this.getObjectLength(this.questions) < 2) {
                    this.hasNext = false;
                }
            });
    }

    goToQuestion(id: any) {
        this.activeQuestion = id;
        if (this.done) {
            this.redo = true;
        }
    }

    goToNext() {
        if (this.done) {
            this.goToQuestion(-1)
            this.redo = false;
            this.summaryComponent.createTable()
        }
        var length = this.getObjectLength(this.questions);
        var nextId = this.activeQuestion+1;
        if ( nextId <= length) {
            this.goToQuestion(nextId)
        } else {
            this.goToQuestion(-1)
        }
    }

    answeredQuestion(e: any) {
        this.flow[e['q_id']] = e['a_id']
        if (this.activeQuestion+1 <= this.getObjectLength(this.questions)) {
            this.hasNext = true;
            this.goToNext();
        } else {
            this.hasNext = false;
            this.goToNext();
            this.finished();
        }
    }

    finished() {
        this.done = true;
    }

    getObjectLength(obj: object) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }

}