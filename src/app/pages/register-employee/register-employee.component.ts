import { Component } from '@angular/core';
import { EmployeeService } from '../../services/EmployeeService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './register-employee.component.html',
  styleUrl: './register-employee.component.css'
})
export class RegisterEmployeeComponent {
  constructor(private employeeService:EmployeeService){}
  selectedValue: string = '';
  submitForm(event: Event) {
    event.preventDefault();

    const id = null;
    const name = (
      document.getElementById('name') as HTMLInputElement
    ).value.trim();
    const email = (
      document.getElementById('email') as HTMLInputElement
    ).value.trim();
    const department = this.selectedValue;

    let employeeData= { id, name, email, department };

    this.employeeService.register(employeeData).subscribe({
      next: () => {
        Swal.fire('Success', 'Employee registered successfully!', 'success');
      },
      error: (err) => {
        if (err.status === 400 && err.error) {
          let errorMessage = '';

          let errorObj;
          try {
            errorObj =
              typeof err.error === 'string' ? JSON.parse(err.error) : err.error;
          } catch (e) {
            console.error('Error parsing JSON:', e);
            errorObj = {};
          }

          if (typeof errorObj === 'object' && errorObj !== null) {
            errorMessage = Object.values(errorObj).join('<br>'); 
          } else {
            errorMessage = 'An unexpected error occurred';
          }

          Swal.fire('Error', errorMessage.trim(), 'error');
        } else {
          Swal.fire(
            'Error',
            'Something went wrong. Please try again.',
            'error'
          );
        }
      },
    });
  }

  listOfDepartments: string[] = ['HR', 'IT', 'FINANCE', 'OPERATIONS'];
}
