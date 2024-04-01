import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export function MovieCard( { item, addFav } ) {
    return (
      <div className="movie-item">
        <img className="movie-photo" src={item.image}></img>
        <h3 className="sub-item"> {item.name} </h3>
        <p className="sub-item"> {item.genre} • {item.rating}/10 IMDb </p>
        <div className="buttons sub-item">
          <a className="play-link"> <FontAwesomeIcon className="play-icon" icon={faCirclePlay} /> </a>
          <a className="add-button" onClick={() => addFav(item)}> Add to list </a>
        </div>
      </div>
    );
  }