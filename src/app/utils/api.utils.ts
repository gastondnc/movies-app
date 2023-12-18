// Autorización de la petición a la API //
export const MOVIES_HEADERS_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTYyY2IxNzc4OTBiNzNlZmRiN2FkZWFlNjVlY2JhOSIsInN1YiI6IjVlODFjODEyMmEyMTBjMDAxNzJiZjU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E40xmOxm-xR3dkj7H19_LeKUeGAkhD7zFSsE8HR6zF8'
  }
};

// Creamos un Enum para controlas los tamaños de las imágenes de las movies //
export enum ImageSize {
  SMALLEST = 'w200',
  SMALL = 'w300',
  MEDIUM = 'w500',
  BIG = 'w700',
  BIGGEST = 'original',
}


// Variables del entorno de desarrollo //
export const MOVIES_BASE_URL = 'https://api.themoviedb.org/3'; // Url base //
export const MOVIES_IMAGE_URL = 'https://image.tmdb.org/t/p/';// Url que nos da todas las imágenes de las movies //
export const MOVIES_DISCOVER_URL = '/discover/movie';// Url que nos da todas la pelis //
export const MOVIES_SEARCH_URL = '/search/movie';// Url que nos da todas la pelis //
export const MOVIES_BY_ID_URL = '/movie/';// Url que nos muetra una Peli por ID //
export const MOVIES_FILTERS = 'include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc'; //Url que nos filtra las pelis por las más populares //
export const MOVIES_GALLERY_URL = `${MOVIES_BASE_URL}/movie/#movie_id#/images`;


