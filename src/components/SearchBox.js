import React from 'react';

const SearchBox = (props) => {
    
    return (
        <div className='search-box'>
            <input
                className='input'
                type='search' 
                placeholder='search by company name'
                onChange={props.searchChange} 
            />
        </div>
        
    );
}

export default SearchBox;