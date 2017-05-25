import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'question',
    templateUrl: 'templates/question.component.html'
})
export class QuestionComponent implements OnInit {
    @Input() question: any;

    question_string: String;
    question_desc: String;
    answers: Array<Object>;

    @Output() answeredEvent = new EventEmitter<object>();

    constructor() {}

    ngOnInit() {
        this.question_string = this.question['question'];
        this.question_desc = this.question['desc'];
        this.answers = this.question['answers'];
    }

    answered(id: any) {
        this.answeredEvent.emit({q_id: this.question.id, a_id: id})
    }
}