import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Starting here!</h1>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
