import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GetAllEmployeesComponent } from './pages/get-all-employees/get-all-employees.component';

export const routes: Routes = [
    {
        path : '',
        component: HomeComponent
    },
    {
        path : 'employee/get-all',
        component : GetAllEmployeesComponent
    }
];
