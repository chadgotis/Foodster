import React, { useState } from 'react';
import '../css/recipe.css';
import Modal from 'react-modal';

const Recipe = (props) => {

    const [isOpen,setisOpen] = useState(false);

    const foodImg = {
        backgroundImage: `url(${props.pic})`,
        width:'250px',
        height:'150px',
        borderRadius:'12px'
    }
    return(
        <div>
            <Modal isOpen={isOpen} onRequestClose={() => setisOpen(false)}>
                <ul className="ingredients">
                    {props.ing.map(dients => (
                        <li>{dients.text}</li>
                    ))}
                </ul>
            </Modal>
            <div className="recipe" onClick={() => setisOpen(true)}>
                <div className='foodstyle' style={foodImg}></div>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}

export default Recipe;