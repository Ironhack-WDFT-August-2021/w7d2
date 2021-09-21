import './App.css';
import { useState } from 'react';
import MoviesList from './MoviesList';

const moviesData = [
  {
    "_id": "1ae23ef1",
    "title": "The Godfather",
    "director": "Francis Coppola",
    "hasOscars": true,
    "IMDBRating": 9.2
  },
  {
    "_id": "1ae23ef2",
    "title": "Star Wars",
    "director": "George Lucas",
    "hasOscars": true,
    "IMDBRating": 8.7
  },
  {
    "_id": "1ae23ef3",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "hasOscars": false,
    "IMDBRating": 9.3
  },
  {
    "_id": "1ae23ef4",
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "hasOscars": false,
    "IMDBRating": 8.0
  },
  {
    "_id": "1ae23ef5",
    "title": "Sharknado",
    "director": "Anthony C. Ferrante",
    "hasOscars": false,
    "IMDBRating": 5.2
  },
  {
    "_id": "1ae23ef6",
    "title": "Titanic",
    "director": "James Cameron",
    "hasOscars": true,
    "IMDBRating": 8.9
  }
]

function App() {

  const [movies, setMovies] = useState(moviesData);

  const addMovie = () => {
    console.log('add movie');
    // add this movie to the list
    const newMovie = {
      "_id": "1ae2fdjer",
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "hasOscars": true,
      "IMDBRating": 8.6
    }

    // update the state of movies
    // movies.push(newMovie) -> ❌ Do not mutate state directly
    // setMovies([newMovie, ...movies])
    // use a function as a parameter for setMovies bc we use the current state to compute the
    // new state
    setMovies(movies => [newMovie, ...movies])
    // const moviesCopy = movies.slice();
    // moviesCopy.unshift(newMovie);
    // setMovies(moviesCopy);
  }

  // const moviesList = movies.map(movie => (<li>{movie.title}</li>))

  return (
    <div className="App">
      <h1>Movies 🍿 🎬</h1>
      <button onClick={addMovie}>Add the movie Interstellar</button>
      {/* {moviesList} */}
      {/* you should not use index as key  🚨*/}
      {/* {movies.map((movie, i) => (<li key={i}>{movie.title}</li>))} */}

      {/*let's move this logic to it's own component  */}
      {/* {movies.map(movie => (<li key={movie._id}>{movie.title}</li>))} */}

      <MoviesList list={movies} />

    </div>
  );
}

export default App;
