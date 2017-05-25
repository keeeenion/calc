import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from "./routes";

import { QuizComponent } from "./views/quiz/quiz.component";
import { HomeComponent } from "./views/home/home.component";
import { AllComponent } from './views/all/all.component';

import { QuestionComponent } from './components/question.component';
import { AnswerComponent } from './components/answer.component';
import { SummaryComponent } from './components/summary.component';

import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        QuizComponent,
        HomeComponent,
        AllComponent,
        QuestionComponent,
        AnswerComponent,
        SummaryComponent,
        KeysPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
