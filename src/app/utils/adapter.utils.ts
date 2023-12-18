import { Movie } from '../models/movie.model'


// Método para obtener solo las propirdades que queremos de las movies //
export function adaptMovie(rawData: any){

  const{ title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
    homepage,
  } = rawData

  const movie: Movie = {
    title: title || 'default title', // Seteamos un valor por defecto por si la propiedad no es devuelta //
    description: overview,
    genres: genres,
    poster: poster_path,
    average: vote_average,
    date: release_date,
    link: homepage || ''
  }

  return movie;
}
