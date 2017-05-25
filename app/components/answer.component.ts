import { Component, Input } from '@angular/core';

@Component({
    selector: 'answer',
    templateUrl: 'templates/answer.component.html'
})
export class AnswerComponent {
    @Input() value: any;
    @Input() amount: Number = 0;

    constructor() {

    }
}