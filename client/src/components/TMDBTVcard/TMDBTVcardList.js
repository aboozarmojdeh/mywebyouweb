import React, {Fragment} from 'react';

import TMDBTVcard from './TMDBTVcard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const TMDBTVcardList = ({ tvShows }) => {
    let TMDBSeries1=tvShows.slice(0,4)
    let TMDBSeries2=tvShows.slice(4,8)
    const TMDBTVcardArray1 = TMDBSeries1.map((tvShow, i) => {
        return (
            <TMDBTVcard 
            key={tvShow.id} 
            tvShowId={tvShow.id} 
            popularity={tvShow.popularity} 
            voteCount={tvShow.vote_count}
            voteAverage={tvShow.vote_average}
            tvShowLanguage={tvShow.original_language}
            tvShowTitle={tvShow.title}
            tvShowOverview={tvShow.overview}
            tvShowDate={tvShow.first_air_date}
            tvShowPosterPath={tvShow.poster_path}
            tvShowBGPath={tvShow.backdrop_path}
            
            
            />
        )
    });

    const TMDBTVcardArray2 = TMDBSeries2.map((tvShow, i) => {
        return (
            <TMDBTVcard 
            key={tvShow.id} 
            tvShowId={tvShow.id} 
            popularity={tvShow.popularity} 
            voteCount={tvShow.vote_count}
            voteAverage={tvShow.vote_average}
            tvShowLanguage={tvShow.original_language}
            tvShowTitle={tvShow.name}
            tvShowOverview={tvShow.overview}
            tvShowDate={tvShow.first_air_date}
            tvShowPosterPath={tvShow.poster_path}
            tvShowBGPath={tvShow.backdrop_path}
            
            
            />
        )
    });

    
    return (
        <Fragment>
       
        {/* <WidgetHeader  widgetHeaderLink={`https://www.nytimes.com/`} widgetHeaderText={`6 Latest Local News`}/> */}
        <div>
        <div className="card-deck">
        {TMDBTVcardArray1}
        </div>
        </div>
        <div style={{ height: "10px" }}></div>
        <div>
            <div className="card-deck">
            {TMDBTVcardArray2}
            </div>
        </div>
        </Fragment>


    )
}

export default TMDBTVcardList;