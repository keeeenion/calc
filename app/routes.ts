import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { QuizComponent } from './views/quiz/quiz.component';
import { AllComponent } from './views/all/all.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'all', component: AllComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
