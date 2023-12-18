import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public todayToFooter: any = new Date().getFullYear()

  public clickHandleFather(){
    console.log('Click Father')
  }


}
