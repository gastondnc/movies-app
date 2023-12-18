import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customabout',
  templateUrl: './customabout.component.html',
  styleUrls: ['./customabout.component.css']
})
export class CustomaboutComponent implements OnInit {

  @Input('title') title:string = ''
  @Input('text') text:string = ''
  @Input('background-color') bgColor: string = ''
  @Input('text-color') textColor: string = ''



  constructor() { }

  ngOnInit(): void {

    console.log(this.bgColor)
    console.log(this.textColor)

  }

}
