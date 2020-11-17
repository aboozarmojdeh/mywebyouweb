import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={onSearchChange}/>
        </div>


    )
};


export default SearchBox;