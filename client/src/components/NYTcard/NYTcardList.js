import React from 'react';

import NYTcard from './NYTcard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const NYTcardList = ({ news }) => {
    let NYTnews1=news.slice(0,3)
    let NYTnews2=news.slice(3,6)

    const NYTnewsArray1 = NYTnews1.map((eachNews, i) => {
        return (
            <NYTcard 
            key={eachNews.uri} 
            newsId={eachNews.uri} 
            newsTitle={eachNews.title}
            newsAbstract={eachNews.abstract} 
            newsURL={eachNews.url}
            newsPublishedDate={eachNews.published_date}
            newsImage={eachNews.multimedia[0].url}
             
            />
        )
    });

    const NYTnewsArray2 = NYTnews2.map((eachNews, i) => {
        return (
            <NYTcard 
            key={eachNews.uri} 
            newsId={eachNews.uri} 
            newsTitle={eachNews.title}
            newsAbstract={eachNews.abstract} 
            newsURL={eachNews.url}
            newsPublishedDate={eachNews.published_date}
            newsImage={eachNews.multimedia[0].url}
             
            />
        )
    });

    
    return (

        <div>
       
        {/* <WidgetHeader  widgetHeaderLink={`https://www.nytimes.com/`} widgetHeaderText={`6 Latest Local News`}/> */}
        <div>
        <div className="card-deck">
            {NYTnewsArray1}
        </div>
        </div>
        <div style={{ height: "10px" }}></div>
        <div>
            <div className="card-deck">
                {NYTnewsArray2}
            </div>
        </div>
    </div>


        


    )
}

export default NYTcardList;