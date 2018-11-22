import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService{
    private _url: string = "https://jsonplaceholder.typicode.com/users"
    constructor(private _http: Http){}
    getEmployees(){

    return this._http.get(this._url).
        map((response:Response) => response.json()).catch(handleError);        
    }
}
function handleError (error: any) {    
    let errorMsg = error.message || `There was a problem to retrieve your data from server!`
    console.error(errorMsg);
  
    // throw an application level error
    return Observable.throw(errorMsg);
  }

  