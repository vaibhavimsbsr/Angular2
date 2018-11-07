import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = "JavaLogin";
  title = 'app';
  onSubmit(data: any){
    console.log(data);
  }
}
