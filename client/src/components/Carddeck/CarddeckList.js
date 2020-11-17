import React from 'react';

import Carddeck from './Carddeck';
import './Carddeck.css';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

import { Dataobj } from './Dataobj';

const CarddeckList = (props) => {


    console.log('Dataobj', Dataobj)
let Dataobj1=Dataobj.slice(0,3);
let Dataobj2=Dataobj.slice(3);
    const localNewscardArray1 = Dataobj1.map((eachNews, i) => {

        return (
            <Carddeck


                newsTitle={eachNews.title}
                newsName={eachNews.name}
                newsDescription={eachNews.description}


                newsImage={eachNews.urlToImage}

            />
        )
    });
    const localNewscardArray2 = Dataobj2.map((eachNews, i) => {

        return (
            <Carddeck


                newsTitle={eachNews.title}
                newsName={eachNews.name}
                newsDescription={eachNews.description}


                newsImage={eachNews.urlToImage}

            />
        )
    });


    return (
        <div>
            {/* <WidgetHeader widgetHeaderLink={`https://www.nytimes.com/`} widgetHeaderText={`New York Times 5 latest news`}/> */}
            <div><div className="card-deck">
                {localNewscardArray1}
            </div></div>
            <div style={{ height: "10px" }}></div>
            <div>
                <div className="card-deck">
                    {localNewscardArray2}
                </div>
            </div>



        </div>


    )
}

export default CarddeckList;