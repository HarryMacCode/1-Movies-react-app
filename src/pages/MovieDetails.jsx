import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../data/httpClient';
import getMovieImg from '../utils/getMovieImg';
import './MovieDetails.css';


const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    console.log('movieId ', movieId);
    get(`/movie/${movieId}`).then((data) => {
        console.log('data', data);
        console.log('Genre', data.genres[0].name);
        setMovie(data);
        setGenre(data.genres[0]);
    })
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className='detailsContainer'>
      <img className='col movieImage' src={imageUrl} alt={movie.title} />
      <div className='col movieDetails'>
        <p className='title'>
            <strong>Title: </strong>{movie.title}
        </p>
        <p>
            <strong>Genre :</strong>{genre.name}
        </p>
        <p>
            <strong>Description :</strong>{movie.overview}
        </p>
      </div>
    </div>
  )
}

export default MovieDetails;
