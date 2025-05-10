import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9070b85671a773e3d99d719c3a60a48b`)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
        </div>
      ))}
    </div>
  );
}

export default Movies;
