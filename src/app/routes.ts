import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { TodayComponent } from './today/today.component';
import { AboutComponent } from './about/about.component';

export const routes:Routes= [
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search-for-coods', component: TodayComponent }
];