import React from 'react';
import '../css/searchbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
    return(
        <div className="search">    
                <input className='searchbar' type="search" placeholder='Search recipe...'/>
                <button className='searchbtn' type="button"><FontAwesomeIcon icon={faSearch}/></button>
        </div>
    )
}

export default SearchBox;