// Importaciones de Angular //
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SafeUrl } from '@angular/platform-browser';

// Importaciones del entorno de desarrollo //
import { MoviesService } from '../../../services/movies.service';
import { ImageSize, MOVIES_IMAGE_URL } from 'src/app/utils/api.utils';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit, AfterViewInit {

  // Declaramos las propiedasdes //
  public movies: any[] = []; // Creamos la propiedad para capturar los datos en un array basio //
  public originalMovies: any[] = []; // Creamos la propiedad para capturar los datos en un array basio //
  public title = 'Movies'; // Propiedad titlel que mostramos en le DOM //
  // public subTitle = 'Trends'; // ''''''''''' //
  private inputSearch: HTMLInputElement | null = null
  private searchTimer: any = null
  public actualPage: number = 1;
  public totalPages: number = 1;
  public isLoading: boolean = false;
  public searchValue: string = '';

  constructor(

    private moviesService: MoviesService,
    private router: Router

  ) { }


  ngOnInit(): void { // Método de ciclo de vida que se utiliza para inicializar componentes después de que se haya realizado la primera carga de datos. Este método se ejecuta automáticamente una vez que se ha creado el componente y se ha establecido su enlace de datos. //

    this.handleFilter(1)


  }

  ngAfterViewInit(): void {

    this.inputSearch = document.getElementById('inputSearch') as HTMLInputElement;

  }



  // Método Safe que nos permite darle seguridad a la Url //
    public getSafeUrl(imagePath: string): SafeUrl {




      return this.moviesService.getSafeUrl(imagePath , ImageSize.SMALLEST)

    }

  // Función donde ejecutamos el Evento Click para comunicarnos con las cards //
    public openDetail(id: number) { // Le pasamos por argumento la propiedad que queremos recuperar de esa card //

      this.router.navigate([`products/${id}`]) // Creamos el metodo navigate para redirigir al compoment product //

    }

    public handleSearch() {

      this.searchValue = this.inputSearch?.value || '';
      console.log(this.searchValue)


      if(this.searchTimer){
        clearTimeout(this.searchTimer)
      }
      this.searchTimer =  setTimeout( () => {

        this.handleFilter(1)

      }, 1000)

    }

    public handleFilter(page: number) {


      this.isLoading = true;

      if(this.searchValue === '') {
        this.movies = this.originalMovies
        this.moviesService.getMoviesByTending(page)
          .then((data) => {// Ejecutamos el metodo getMovies para poder ver los datos que nos llegan desde la APi //
            this.movies = data.results
            this.movies.forEach(movie=>{movie.poster_path = this.getSafeUrl(movie.poster_path)})
            this.actualPage = data.page
            this.totalPages = data.total_pages // Guardamos los datos en una varible para poder pintarlos //
            this.isLoading = false;
        })

      }else{

        this.moviesService.getMoviesBySearch(this.searchValue, page)
          .then(data => {
            this.movies = data.results
            this.movies.forEach(movie=>{movie.poster_path = this.getSafeUrl(movie.poster_path)})
            this.actualPage = data.page
            this.totalPages = data.total_pages
            this.isLoading = false;
          })
      }

    }

}















