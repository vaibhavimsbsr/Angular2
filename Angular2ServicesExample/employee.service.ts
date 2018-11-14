import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{
    getEmployee(){
        return [
            {"id": 1, "name": "James", "gender": "Male", "salary": 30000},
            {"id": 2, "name": "Amy", "gender": "Female", "salary": 10000},
            {"id": 3, "name": "Clark", "gender": "Male", "salary": 40000},
            {"id": 4, "name": "Lin", "gender": "Female", "salary": 20000}
        ]
    }
}
