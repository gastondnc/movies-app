import { Component, OnInit } from '@angular/core';
import {  SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesService } from 'src/app/services/movies.service';
import { MOVIES_IMAGE_URL, ImageSize, MOVIES_GALLERY_URL } from '../../../../utils/api.utils'



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent implements OnInit {

  public title:string = 'Details';
  public movie: any = null;
  public movieId: string = '';




  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,

  ) {

    // Llamamos a cada movie por su ID //

    this.movieId = this.router.snapshot.params['id']
    this.moviesService.getMovieById(this.movieId)
    .then( movie => {
      this.movie = movie
    } )



  }


  ngOnInit() {

  }

  // Método para que la url sea segura y contatenamos las imágenes de las movies y manejamos sus tamaños //
  public getSafeUrl(imagePath: string = ''): SafeUrl {



    return this.moviesService.getSafeUrl(imagePath, ImageSize.MEDIUM )
  }


  // Método que utilizamos para recorrer el array que nos trae los objetos de los generos y de esos objetos sacamos la propiedad name para pintarlas en la vista //
  public getGenres(paramgenres: any[] = []): string {
    const genres: string [] = [];
    paramgenres.forEach((genre: any) => {
      genres.push(genre.name)
    } )
    console.log(genres)

    return genres.join(', ');
  }

  // Método para saber cual es el porcentaje de gente que le gusta esa movie y poder pintarla en la vista //
  public getAverage(av: number): string {

    // const percent: number =  Math.round(av * 10)
    const percent: number =  Math.round(av * 100 / 10); // Utilizamos el método Mad para redondear el porcentaje //

    return `Al ${percent}% le gusta esta pelicula`
  }

}



