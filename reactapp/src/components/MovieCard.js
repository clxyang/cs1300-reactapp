import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons'

export function MovieCard( { item, favorites, toggleFav } ) {

  const handleFavButton = () => {
    const isFavorited = favorites.some(favId => favId == item.id); // check if it's already in the list

    if (!isFavorited) {
      return <a> <FontAwesomeIcon className="button-notsaved" onClick={()=>toggleFav(item)} icon={regularBookmark} /> </a>
    } else {
      return <a> <FontAwesomeIcon className="button-saved" onClick={()=>toggleFav(item)} icon={solidBookmark} /> </a>
    }
  }

  return (
    <div className="movie-item">
      <div className="image-content">
        <img className="movie-photo" src={item.image}></img>
        <div className="text-overlay">
          <h3> {item.name} </h3>
          <p> {Math.floor(item.watchTime/60)}hr {item.watchTime - Math.floor(item.watchTime/60)*60}min </p>
        </div>
      </div>
      <div className="bottom-items">
        <div className="bottom-descriptors">
          <p className="sub-item"> {item.genre}</p>
          <p className="sub-item"> {item.rating}/10 IMDb </p>
        </div>
        {handleFavButton()}
      </div>
    </div>
  );
}