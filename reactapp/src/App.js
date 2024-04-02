import './App.css';
import { useEffect, useState } from "react";
import movieData from "./assets/movieData.json";
import { MovieCard } from "./components/MovieCard";
import { Filter } from './components/FilterBox';

function App() { 
  const [allMovies] = useState(movieData);
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (movie) => {
    console.log('adding to fav: ', movie.name)
    const isFavorited = favorites.some(item => item.name == movie.name); // check if it's already in the list
    
    if (!isFavorited) {
        movie.isFavorited = true;
        setFavorites([...favorites, movie]);
        
    } else {
      const removedList = favorites.filter(item => item.name !== movie.name);
      movie.isFavorited = false;
      setFavorites(removedList);
    }
  };


  return (
    <div className="App">
      <h1 className="app-name">
        Streamify
      </h1>
      <Filter allMovies={allMovies} handleFav={handleFavorite}></Filter>


    </div>
  );
}

export default App;
