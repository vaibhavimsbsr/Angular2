import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailsComponent } from './employee-details.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeDetailsComponent, EmployeeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
