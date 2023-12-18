
// Creamos el modelo de datos que nosotros queremos obtener de la movies //

export interface Movie {
  title: string,
  description: string,
  genres: Genre[],
  poster: string,
  average: string,
  date: string,
  link: string
}

interface Genre {
  id: number,
  name: string
}
