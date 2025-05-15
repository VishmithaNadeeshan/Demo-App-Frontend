import { Component } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/EmployeeService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent {
  searchType: string = '';
  searchValue: any = '';
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  searchEmployee() {
    if (!this.searchValue) return;

   
       
        this.employeeService
          .searchById(this.searchValue)
          .subscribe({
            next: (res) => {
              res !== null ? this.employees.push(res) : this.employees = [];
            },
            error: (err) => {
              this.employees.length=0;
            }
          });

        
      
    }
  
}
