import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Marvellous</h1>
    <h2>Welcome User</h2>  
  `,
  styles: [
    'h1{color:red;}h2{color:yellow;}'
  ]
})
export class AppComponent {
  title = 'app';
}
