import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";


export function Filter( { allMovies, toggleFav, filteredMovies, setFilteredMovies, favorites } ) {

    const [actionSelected, setAction] = useState(false);
    const [animationSelected, setAnimation] = useState(false);
    const [comedySelected, setComedy] = useState(false);
    const [fantasySelected, setFantasy] = useState(false);
    const [horrorSelected, setHorror] = useState(false);
    const [romanceSelected, setRomance] = useState(false);

    const [shortSelected, setShort] = useState(false);
    const [rankOption, setRankOption] = useState("");

    const performRank = (movieList) => {
        if (rankOption == 'rating') {
            movieList.sort((a, b) => b.rating - a.rating);
        }
        else {
            movieList.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    const rankMovies = () => {
        let sortedMovies = [...filteredMovies];
        performRank(sortedMovies)
        setFilteredMovies(sortedMovies);
    }

    const performFilter = () => { 
        const moviesCopy = allMovies.slice() // defensive copy TODO is this the right list
        performRank(moviesCopy)
        setFilteredMovies(() => moviesCopy.filter(movie => inSelection(movie)))
    }

    // return boolean on whether this movie should be in the selection
    const inSelection = (movie) => {
        const movieGenre = movie.genre;
        let genreMatch = false;
        let lengthMatch = true;

        if (((movieGenre == "Action") && (actionSelected)) ||
        (movieGenre == "Animation") && (animationSelected) ||
        (movieGenre == "Comedy") && (comedySelected) ||
        (movieGenre == "Fantasy") && (fantasySelected) ||
        (movieGenre == "Horror") && (horrorSelected) ||
        (movieGenre == "Romance") && (romanceSelected)) {
            genreMatch = true
        }
        if (((!actionSelected && !animationSelected) && (!comedySelected && !fantasySelected)) &&
            (!horrorSelected && !romanceSelected)) {
            genreMatch = true
        }
        if (shortSelected && (movie.watchTime >= 120)) {
            lengthMatch = false;
        }

        return genreMatch && lengthMatch
    }

    useEffect(() => {
        rankMovies()
        performFilter()
    }, [actionSelected, animationSelected, comedySelected, fantasySelected, horrorSelected,
        romanceSelected, shortSelected, rankOption, allMovies])

    const handleReset = () => {
        setAction(false);
        setAnimation(false);
        setComedy(false);
        setFantasy(false);
        setHorror(false);
        setRomance(false);
        setShort(false);
        setRankOption("");
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        const radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.checked = false;
        });
    }


    return (
        <div className="page-content">
            {/* MOVIE CARD DISPLAY */}
            <div className="movie-list">
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} item={movie} favorites={favorites} toggleFav={toggleFav}/>
                ))}
            </div>

            {/* FILTER AND SORT BOXES */}
            <div className="filter-section">
                <h2>Filter & Sort</h2>

                {/* GENRE BOX */}
                <div className="filter-box">
                    <h2> Genre </h2>

                    <div className="list-items">
                        <div>
                            <input
                                type="checkbox"
                                className="genre-checkbox"
                                onClick={() => setAction(!actionSelected)}
                            />
                            <span className="genre-name"> Action </span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                className="genre-checkbox"
                                onClick={() => setAnimation(!animationSelected)}
                            />
                            <span className="genre-name"> Animation </span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                className="genre-checkbox"
                                onClick={() => setComedy(!comedySelected)}
                            />
                            <span className="genre-name"> Comedy </span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                className="genre-checkbox"
                                onClick={() => setFantasy(!fantasySelected)}
                            />
                            <span className="genre-name"> Fantasy </span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                className="genre-checkbox"
                                onClick={() => setHorror(!horrorSelected)}
                            />
                            <span className="genre-name"> Horror </span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                className="genre-checkbox"
                                onClick={() => setRomance(!romanceSelected)}
                            />
                            <span className="genre-name"> Romance </span>
                        </div>
                    </div>
                </div>

                {/* WATCHTIME BOX */}
                <div className="filter-box">
                    <h2> Watch Time </h2>
                    <div>
                        <input
                            type="checkbox"
                            className="genre-checkbox"
                            onClick={() => setShort(!shortSelected)}
                        />
                        <span className="genre-name"> Movies under 2 hours </span>
                    </div>
                </div>

                {/* RANK BOX */}
                <div className="filter-box">  
                    <h2>Sort by</h2>
                    <div>
                        <input
                            type="radio"
                            checked={rankOption == 'name'}
                            onChange={() => setRankOption('name')}
                        />
                        <span className="ml-2">Movie name (default)</span>
                    </div>
                    <div>
                        <input
                            type="radio"
                            checked={rankOption == 'rating'}
                            onChange={() => setRankOption('rating')}
                        />
                        <span className="ml-2">Movie rating</span>
                    </div>
                </div>

                <div className="reset-container">
                    <button onClick={handleReset}>Reset All</button>
                </div>
            </div>
        </div>
    );
    
}
