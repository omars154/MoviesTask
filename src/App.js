import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NavB from './components/Nav';
import Movies from './pages/Movies'
import MovieDetails from './pages/MoviesDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=9070b85671a773e3d99d719c3a60a48b';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDcwYjg1NjcxYTc3M2UzZDk5ZDcxOWMzYTYwYTQ4YiIsIm5iZiI6MTc0NjYyMzk5NS43NzcsInN1YiI6IjY4MWI1ZGZiNzU5MzQwYWIwNDgwOTQzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2QXIRqVF9Ere4ylKGL7ZeVZXHjCwrwYfv8QivToF-8'
  }
};

function App() {
  useEffect(() => {
    axios.get(url, options)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <NavB />
      <Routes>
        <Route path="/home" element={<div>Home Page</div>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:id" element={<MovieDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
