import { Component } from '@angular/core';

@Component({
    selector: 'employee-list',
    template: `<h3>Employees List</h3>
                <ul class ="list-group">
                    <li *ngFor="let employee of employees" class ="list-group-item">
                        {{employee.id}}\t&nbsp; \t&nbsp;\t&nbsp;\t&nbsp;{{employee.name}}
                    </li>
                <ul>
    `
})

export class EmployeeListComponent {
    employees = [
        {"id": 1, "name": "Smith"},
        {"id": 2, "name": "John Lawrie"},
        {"id": 3, "name": "Ryan"},
        {"id": 4, "name": "Michael"},
        {"id": 5, "name": "Jon"},
        {"id": 6, "name": "Jeff Weiner"},
        
    ]

}