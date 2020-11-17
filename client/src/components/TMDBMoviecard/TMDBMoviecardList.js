import React, {Fragment} from 'react';

import TMDBMoviecard from './TMDBMoviecard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const TMDBMoviecardList = ({ movies }) => {
    let TMDBMovies1=movies.slice(0,4)
    let TMDBMovies2=movies.slice(4,8)

    const TMDBMoviecardArray1 = TMDBMovies1.map((movie, i) => {
        return (
            <TMDBMoviecard 
            key={movie.id} 
            MovieId={movie.id} 
            popularity={movie.popularity} 
            voteCount={movie.vote_count}
            voteAverage={movie.vote_average}
            movieLanguage={movie.original_language}
            movieTitle={movie.title}
            movieOverview={movie.overview}
            movieDate={movie.release_date}
            moviePosterPath={movie.poster_path}
            movieBGPath={movie.backdrop_path}
            
            
            />
        )
    });

    const TMDBMoviecardArray2 = TMDBMovies2.map((movie, i) => {
        return (
            <TMDBMoviecard 
            key={movie.id} 
            MovieId={movie.id} 
            popularity={movie.popularity} 
            voteCount={movie.vote_count}
            voteAverage={movie.vote_average}
            movieLanguage={movie.original_language}
            movieTitle={movie.title}
            movieOverview={movie.overview}
            movieDate={movie.release_date}
            moviePosterPath={movie.poster_path}
            movieBGPath={movie.backdrop_path}
            
            
            />
        )
    });

    // const tMDBLogo=`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`;
    return (
        <Fragment>
       
        {/* <WidgetHeader  widgetHeaderLink={`https://www.nytimes.com/`} widgetHeaderText={`6 Latest Local News`}/> */}
        <div>
        <div className="card-deck">
        {TMDBMoviecardArray1}
        </div>
        </div>
        <div style={{ height: "10px" }}></div>
        <div>
            <div className="card-deck">
            {TMDBMoviecardArray2}
            </div>
        </div>
        </Fragment>


    )
}

export default TMDBMoviecardList;