import './App.css';
import { useEffect, useState } from "react";
import movieData from "./assets/movieData.json";
import { DisplayList } from "./components/DisplayList";
import { MovieCard } from "./components/MovieCard";

function App() { 

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

  const showItems = () => {
    return movieData.map((item, index) => ( 
      <MovieCard item={item} name={item.name} genre={item.genre} rating={item.rating}
        watchTime={item.watchTime} image={item.image} addFav={addFavorite}></MovieCard>
    ))
  }

  return (
    <div className="App">
      <h1 className="App-name">
        Streamify
      </h1>

      <div className="PageContent">
        <div className="MovieList">
          {showItems()}
        </div>
        <div className="FilterSection">

        </div>
      </div>
    </div>
  );
}

export default App;
