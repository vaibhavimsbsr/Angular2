import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'department-list',
    template: `<h3>Department List</h3>Click on below row
                <ul class ="list-group">
                    <li (click)="onSelect(department)"
                    *ngFor="let department of departments" class ="list-group-item">
                        {{department.id}}\t&nbsp; \t&nbsp;\t&nbsp;\t&nbsp;{{department.name}}
                    </li>
                <ul>
            `
})

export class DepartmentListComponent {
    constructor(private router: Router){}
    
    departments = [
        {"id": 1, "name": "IT"},
        {"id": 2, "name": "HR"},
        {"id": 3, "name": "R&D"},
        {"id": 4, "name": "Account"},
        {"id": 5, "name": "Finance"},
        {"id": 6, "name": "Marketing"}        
    ]

    onSelect(department) {
        this.router.navigate(['/departments', department.id])
    }
}