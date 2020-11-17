import React from 'react';

import Catcard from './Catcard';





const CatcardList = ({ cats, getLocalNews }) => {

    const cardArray = cats.map((cat, index) => {
        return (
            <Catcard key={cat.id} id={cat.id} name={cat.name} website={cat.website} companyName={cat.company.name} description={cat.company.catchPhrase} />
        )
    })


    return (
        <div className='row'>
            {cardArray}
        </div>

    )

};

export default CatcardList;