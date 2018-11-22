import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-details',
    template: `<h2>Employee Details</h2>
                <ul *ngFor="let employee of employees">
                    <li>{{employee.id}}. {{employee.name}}</li>
                </ul>
              `
})

export class EmployeeDetailsComponent {
    employees = [];

    constructor(private _employeeService: EmployeeService){}
    ngOnInit(){
        this._employeeService.getEmployees()
        .subscribe(resEmployeeData => this.employees = resEmployeeData);
    }
}

