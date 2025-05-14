import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GetAllEmployeesComponent } from './pages/get-all-employees/get-all-employees.component';
import { RegisterEmployeeComponent } from './pages/register-employee/register-employee.component';

export const routes: Routes = [
    {
        path : '',
        component: HomeComponent
    },
    {
        path : 'employee/get-all',
        component : GetAllEmployeesComponent
    },
    {
        path : `employee/register`,
        component : RegisterEmployeeComponent
    }
];
