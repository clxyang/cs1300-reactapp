import './App.css';
import { useEffect, useState } from "react";
import movieData from "./assets/movieData.json";
import { MovieCard } from "./components/MovieCard";
import { Filter } from './components/FilterBox';

function App() { 
  const [allMovies] = useState(movieData);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    console.log('adding to fav: ', movie.name)
    const isFavorited = favorites.some(item => item.name === movie.name); // check if it's already in the list
    
    if (!isFavorited) {
        setFavorites([...favorites, movie]);
    }

    // TODO: disable favorite button instead of having the check?
  };

  const removeFavorite = (movieName) => {
    const removedList = favorites.filter(item => item.name !== movieName);
    setFavorites(removedList);
  };

  return (
    <div className="App">
      <h1 className="app-name">
        Streamify
      </h1>
      <Filter allMovies={allMovies} onClick={addFavorite}></Filter>


    </div>
  );
}

export default App;
