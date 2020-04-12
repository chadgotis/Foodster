import React from 'react';
import '../css/searchbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = (props) => {
    return(
        <div className="search"> 
            <form onSubmit={props.submit}>  
                <input className='searchbar' type="search" placeholder='Search recipe...' onChange={props.change}/>
                <button className='searchbtn' type="button"><FontAwesomeIcon icon={faSearch}/></button>
            </form> 
     {props.searchRes==="steak" ? '' : (<h2>Search Result for: {props.searchRes}</h2>)} 
        </div>
    )
}

export default SearchBox;