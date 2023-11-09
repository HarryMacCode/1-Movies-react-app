import placeholder from '../img/regarder-un-film.png';

export default function getMovieImg(path, width){
  return path ? `https://image.tmdb.org/t/p/w${width}${path}`: placeholder;
}

