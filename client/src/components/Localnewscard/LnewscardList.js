import React from 'react';

import Lnewscard from './Lnewscard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const LnewscardList = ({ localNews }) => {
    let localNews1=localNews.slice(0,3);
    let localNews2=localNews.slice(3);
    const localNewscardArray1 = localNews1.map((eachNews, i) => {
        return (
            <Lnewscard 
            key={eachNews.url} 
            newsSource={eachNews.source.name}
            newsTitle={eachNews.title}
            newsDescription={eachNews.description}
            newsURL={eachNews.url}
            newsPublishedDate={eachNews.publishedAt}
            newsImage={eachNews.urlToImage}
             
            />
        )
    });
    const localNewscardArray2 = localNews2.map((eachNews, i) => {
        return (
            <Lnewscard 
            key={eachNews.url} 
            newsSource={eachNews.source.name}
            newsTitle={eachNews.title}
            newsDescription={eachNews.description}
            newsURL={eachNews.url}
            newsPublishedDate={eachNews.publishedAt}
            newsImage={eachNews.urlToImage}
             
            />
        )
    });

    
    return (
        <div>
       
            {/* <WidgetHeader  widgetHeaderLink={`https://www.nytimes.com/`} widgetHeaderText={`6 Latest Local News`}/> */}
            <div>
            <div className="card-deck">
                {localNewscardArray1}
            </div>
            </div>
            <div style={{ height: "10px" }}></div>
            <div>
                <div className="card-deck">
                    {localNewscardArray2}
                </div>
            </div>
        </div>


    )
}

export default LnewscardList;