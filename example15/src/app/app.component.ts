import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnClickOutput = '';

  public fun(){
    return this.btnClickOutput = "Marvellous Infosystems";
  }
}
