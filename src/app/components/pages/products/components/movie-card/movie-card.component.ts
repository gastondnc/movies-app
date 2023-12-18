import { Component, Input, OnInit } from '@angular/core';

interface Movie {
  title: string;
  poster_path: string;
}





@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input('movie-data') movie: Movie =  {title: 'Title', poster_path: 'poster'}



  constructor() { }

  ngOnInit(): void {


  }



}
