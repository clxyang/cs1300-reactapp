import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export function MovieCard( { item, name, genre, rating, watchTime, image, addFav } ) {
    return (
      <div className="MovieItem">
        <img className="MoviePhoto" src={image}></img>
        <h2 className="SubItem"> {name} </h2>
        <p className="SubItem"> {genre} • {rating}/10 IMDb </p>
        <div className="Buttons SubItem">
          <a className="PlayLink"> <FontAwesomeIcon className="PlayIcon" icon={faCirclePlay} /> </a>
          <a className="AddButton" onClick={() => addFav(item)}> Add to list </a>
        </div>
      </div>
    );
  }