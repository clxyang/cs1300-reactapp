import './App.css';
import { useEffect, useState } from "react";
import movieData from "./assets/movieData.json";
import { MovieCard } from "./components/MovieCard";
import { Filter } from './components/FilterBox';

function App() { 
  const [allMovies] = useState(movieData);
  const [favorites, setFavorites] = useState([]);
  const [favCount, setFavCount] = useState(0);

  const handleFavorite = (movie) => {
    console.log('adding to fav: ', movie.name)
    const isFavorited = favorites.some(item => item.name == movie.name); // check if it's already in the list
    
    if (!isFavorited) {
        movie.isFavorited = true;
        setFavorites([...favorites, movie]);
        setFavCount(favCount+1)
        
    } else {
      const removedList = favorites.filter(item => item.name !== movie.name);
      movie.isFavorited = false;
      setFavorites(removedList);
      setFavCount(favCount-1)
    }
  };


  return (
    <div className="App">
      <h1 className="app-name">
        streamify
      </h1>
      <Filter allMovies={allMovies} handleFav={handleFavorite}></Filter>
      
      <div className="favorites-section">
        <h2 className="favorites-title">Your list ({favCount} movies)</h2>
        <div className="movie-list">
          {favorites.map(movie => (
              <MovieCard key={movie.id} item={movie} isFavorited={true} handleFav={handleFavorite}/>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
