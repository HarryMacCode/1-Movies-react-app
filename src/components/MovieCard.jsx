import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
  return (
    <li className='movieCard'>
      <Link to={`/movies/${movie.id}`}>
        <img className='movieImage' width={230} height={345} src={imgUrl} alt={movie.title} />
        <div>{movie.title}</div>
      </Link>
    </li>
  )
}

export default MovieCard;