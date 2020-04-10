import React from 'react';
import '../css/recipe.css';

const Recipe = (props) => {
    const foodImg = {
        backgroundImage: `url(${props.pic})`,
        width:'250px',
        height:'150px',
        borderRadius:'12px'
    }
    return(
        <div className="recipe">
            <div className='foodstyle' style={foodImg}></div>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <ul>

            </ul>
        </div>
    );
}

export default Recipe;