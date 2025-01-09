import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about/:id', component: AboutComponent },
];
