// Importasiones de Angular //
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// Importaciones de entorno de Desarrollo //
import { MOVIES_BASE_URL, MOVIES_FILTERS, MOVIES_HEADERS_OPTION, MOVIES_DISCOVER_URL, MOVIES_BY_ID_URL, MOVIES_GALLERY_URL, MOVIES_SEARCH_URL, MOVIES_IMAGE_URL, ImageSize } from '../utils/api.utils'
import { adaptMovie } from '../utils/adapter.utils';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  // private baseUrl: string = 'https://gateway.marvel.com:443/v1/public/characters'
  // private apiKey: string = '0093dc92266f2b5b72639ff240a729af'


  constructor(  private sanitizer: DomSanitizer ) { }


  // Método para traenos la infomacion de la API de todas la movies //
  public getMoviesByTending(page:number = 1): Promise<any> {

    // const url: string = `${this.baseUrl}?apikey=${this.apiKey}`;
    const url: string = `${MOVIES_BASE_URL}${MOVIES_DISCOVER_URL}?include_adult=false&language=en-US&page=${page}`;
    return fetch(url, MOVIES_HEADERS_OPTION) // Capturamos la ulr //
    .then( (resp) => resp.json() ) // Transformamos la url es un objeto //
    .then( (data) =>{ // Capturamos la información //
      console.log(data)
      const movies: any [] = data.results // Guardamos la data el la propiedad movies //
      console.log(movies);
      return data
    } )

    .catch( (err) => console.log('Error') )// Capturamos el error //
  }

  public getMoviesBySearch(searchString: string, page:number = 1): Promise<any> {


    // const url: string = `${MOVIES_BASE_URL}${MOVIES_DISCOVER_URL}?${MOVIES_FILTERS}`;
    const url: string = `${MOVIES_BASE_URL}${MOVIES_SEARCH_URL}?query=${searchString}&include_adult=false&language=en-US&page=${page}`;
    return fetch(url, MOVIES_HEADERS_OPTION) // Capturamos la ulr //
    .then( (resp) => resp.json() ) // Transformamos la url es un objeto //
    .then( (data) =>{ // Capturamos la información //
      console.log(data)
      return data
    } )

    .catch( (err) => console.log('Error') )// Capturamos el error //
  }


  // Método para traernos cada movie y solicitar que las traiga por Id //
  public getMovieById(id: string) {
    // const  url: string = `${this.baseUrl}/${id}?apikey=${this.apiKey}`
    const  url: string = `${MOVIES_BASE_URL}${MOVIES_BY_ID_URL}${id}`
    return fetch(url, MOVIES_HEADERS_OPTION)
    .then( (resp) => resp.json() )
    .then( (data) => {
      console.log(data)
      const movie = adaptMovie(data)
      console.log(movie)
      return movie
    } )
  }


  // Método para traernos por id la gallería de imagenes //
public getImageGalleryByMovieId(movieId: string) {
  console.log(MOVIES_GALLERY_URL); // console para ver la url de la galería de imagenes de cada movie //

    const galleryUrl: string = MOVIES_GALLERY_URL.replace('#movie_id#', movieId) // guardamos en la variable la galería de imagenes y unsamos el método replace para agregar el id de la movie //
    console.log(galleryUrl)

  return fetch(galleryUrl, MOVIES_HEADERS_OPTION) // Hacemos el fetch y le pasamos como arguemto la galleryUrl y la url donde traemos toda la data de todas la movies //
  .then( (resp) => resp.json() ) // entonces esperamos la respuesta la transformamos a objeto //
  .then( (data) => { // recuperamos los datos //
      console.log(data)
      return data.posters // Retornamos los datos y le pasamos la propirdad que queremos recuperar //
  } )

}




  public getSafeUrl(imagePath: string, imageSize: string): SafeUrl {

      const url: string = imagePath
        ? `${MOVIES_IMAGE_URL}${imageSize}${imagePath}`
        : '../../../../assets/no-image.png'

    return this.sanitizer.bypassSecurityTrustUrl(url)
  }

}



