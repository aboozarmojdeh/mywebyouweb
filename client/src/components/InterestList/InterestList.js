import React from 'react';

const InterestList=({localNews,localSportNews,NYTNews,TMDBMovies,TMDBSeries})=>{
    return(
       
             <div className="card">
        <div className="card-header header-bg">
          List of Interests
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            
            <div><p onClick={localNews} style={{cursor:"pointer",fontSize:"14px"}}>Local News</p> </div>
            <div><p onClick={localSportNews} style={{cursor:"pointer",fontSize:"14px"}}>Local Sport News</p> </div>
                          <div><p onClick={NYTNews} style={{cursor:"pointer",fontSize:"14px"}}>World News</p> </div>
                          <div><p onClick={TMDBMovies} style={{cursor:"pointer",fontSize:"14px"}}>Movies</p> </div>
                          <div><p onClick={TMDBSeries} style={{cursor:"pointer",fontSize:"14px"}}>TV Series</p> </div>
                          
            {/* <footer className="blockquote-footer"><cite title="Source Title" style={{fontSize:'12px'}}>{dailyQuote.author}</cite></footer> */}
          </blockquote>
        </div>
      </div>
        
    )
}

export default InterestList;