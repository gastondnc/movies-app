import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {

  @Input('title') title: string = 'Ultimas Noticias'
  @Input('text') text: string = 'Example text'
  @Input('background-color') backgroundColor: string = '#222';
  @Input('text-color') textColor: string = '#fff';
  @Input('border-radius') borderRadius: number = 6;
  @Input('with-shadow') withShadow: boolean = true;
  @Input('image') image: string =  'Culo';


  constructor() { }

  ngOnInit(): void {

    this.image =  this.checkImageUrl(this.image)

  }

  private checkImageUrl(imageUrl: string): string {

    return imageUrl.startsWith('https://') ? imageUrl : ''

  }

}
