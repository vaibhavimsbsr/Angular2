import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h1>This is the Component Example</h1><br/><br/><br/>
              <sub-component></sub-component>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2';
}