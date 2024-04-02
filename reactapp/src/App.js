import './App.css';
import { useEffect, useState } from "react";
import movieData from "./assets/movieData.json";
import { MovieCard } from "./components/MovieCard";
import { Filter } from './components/FilterBox';

function App() { 
  const [allMovies] = useState(movieData);
  const [favorites, setFavorites] = useState([]); // list of ids
  const [filteredMovies, setFilteredMovies] = useState([]); // list of movie cards
  const [favCount, setFavCount] = useState(0);

  const toggleFavorite = (movie) => {
    console.log('toggling fav: ', movie.id)
    const isFavorited = favorites.some(favId => favId == movie.id); // check if it's already in the list
    console.log('favorites has: ', favorites)
    console.log('this movie is favorited already? ', isFavorited)

    if (!isFavorited) {
        setFavorites([...favorites, movie.id]);
        console.log('successfully added name')
        console.log('now favorites has: ', favorites)
        setFavCount(favCount+1)
        
    } else {
      const removedList = favorites.filter(id => id !== movie.id);
      setFavorites(removedList);
      setFavCount(favCount-1)
    }
  };


  return (
    <div className="App">
      <h1 className="app-name">
        streamify
      </h1>

      <h2 className="favorites-title">Browse Movies For You</h2>
      <Filter allMovies={allMovies} toggleFav={toggleFavorite}
              filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} favorites={favorites}></Filter>
      
      <div className="favorites-section">
        <h2 className="favorites-title">Your list ({favCount} movies)</h2>
        <div className="movie-list">
          {favorites.map(favId => {
            const movieItem = allMovies.find(movie => favId === movie.id);
            if (movieItem) {
              return <MovieCard key={movieItem.id} item={movieItem} favorites={favorites} toggleFav={toggleFavorite} />;
            };
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
