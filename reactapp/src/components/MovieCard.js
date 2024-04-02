import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export function MovieCard( { item, isFavorited, handleFav } ) {
  
  const [favorited, setFavorited] = useState(isFavorited);
  const handleFavButton = () => {
    if (!favorited) {
      return <a className="add-button" onClick={addToFavorites}> Add to list </a>
    } else {
      return <a className="add-button" onClick={removeFromFavorites}> Remove from list </a>
    }
  }

  const addToFavorites = () => {
    handleFav(item);
    setFavorited(true);
  };

  const removeFromFavorites = () => {
    handleFav(item);
    setFavorited(false);
  };

  return (
    <div className="movie-item">
      <div className="image-content">
        <img className="movie-photo" src={item.image}></img>
        <div className="text-overlay">
          <h3 className="sub-item"> {item.name} </h3>
        </div>
      </div>
      <p className="sub-item"> {item.genre}</p>
      <p className="sub-item"> {item.rating}/10 IMDb </p>
      <div className="buttons">
          <a className="play-link"> <FontAwesomeIcon className="play-icon" icon={faCirclePlay} /> </a>
          {handleFavButton()}
      </div>
    </div>
  );
}