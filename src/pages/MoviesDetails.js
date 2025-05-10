import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=9070b85671a773e3d99d719c3a60a48b`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  });

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Movie overview: {movie.overview}</p>
      <p>movie voting: {movie.vote_average}</p>
      <p>Movie release date: {movie.release_date}</p>
    </div>
  );
}

export default MovieDetails;
