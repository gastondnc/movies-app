import { Component, Input, OnInit } from '@angular/core';


import { MoviesService } from '../../../../../services/movies.service'
import { ImageSize, MOVIES_IMAGE_URL } from 'src/app/utils/api.utils';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

  @Input( 'movie-id' ) movieId: string = ''

  public title: string = 'Galley Movie';
  public imagesUrlGallery: SafeUrl[] = [];
  public originalImageGallery: any []= [];
  public actualPage: number = 1;
  public thumbsByPage: number = 5;

  constructor( private movieService: MoviesService) {



  }



  ngOnInit(): void {

    this.movieService.getImageGalleryByMovieId(this.movieId)
    .then(posters => {
      console.log(posters)
      this.originalImageGallery = posters
      this.buildImagesGallery(posters)

    })

  }


  private getLimitedList(originalList: any[], startIndex: number, endIndex: number) {

    const limitedList: any[] = originalList.slice(startIndex, endIndex)
    return limitedList

  }

  public buildImagesGallery(posters: any []){

    console.log(posters)

    const limitedPosters: any[] = this.getLimitedList(posters, (this.actualPage * this.thumbsByPage) - this.thumbsByPage, this.actualPage * this.thumbsByPage)

    this.imagesUrlGallery = limitedPosters.map( (poster) => {


      const safeUrl: SafeUrl = this.movieService.getSafeUrl(poster.file_path, ImageSize.SMALLEST)

      return  safeUrl
    } )

    console.log(this.imagesUrlGallery)
  }


  public prevPage() {

    this.actualPage = this.actualPage - 1
    this.buildImagesGallery(this.originalImageGallery)

    console.log(this.actualPage)

  }


  public nextPage() {

    this.actualPage = this.actualPage + 1
    this.buildImagesGallery(this.originalImageGallery)

    console.log(this.actualPage)

  }

  public getTotalPages(): number {

    const result: number = this.originalImageGallery.length / this.thumbsByPage
    return Math.ceil(result)

  }




}
