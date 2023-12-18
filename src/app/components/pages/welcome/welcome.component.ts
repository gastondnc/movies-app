import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Output('on-click-event') onClickEvent: EventEmitter<boolean> = new EventEmitter()

  public title = 'Angular Bases';
  private buttonLabel = 'Entre y disfrute';
  public mycard: any = {
      title: "Ultimas Noticias",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgColor: "brown",
      textColor:"#DDF2FD",
      borderRadius:"6",
      withShadow: "false",
      img:'https://i.pinimg.com/originals/3a/f5/a8/3af5a8050d6711c2d3d2ca915d1561ff.jpg'
  }


  constructor(){


  }


  public handleClick(){
    console.log('Click Hijo');
    this.onClickEvent.emit(true);
  }

  public getButtonLabel() {

    return this.buttonLabel

  }

  ngOnInit(): void {




  }





}














