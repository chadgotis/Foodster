import React, { useState } from 'react';
import '../css/recipe.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

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
            <Modal 
                style={{
                    content : {
                        top                   : '50%',
                        left                  : '50%',
                        right                 : 'auto',
                        bottom                : 'auto',
                        marginRight           : '-50%',
                        transform             : 'translate(-50%, -50%)',
                        maxHeight             : '500px',
                        maxWidth              : '700px',
                        textAlign             : 'center'
                      }

                }}
                isOpen={isOpen} onRequestClose={() => setisOpen(false)}>
                <ul className="ingredients">
                    <img src={props.pic} alt={props.pic}/>
                    <h2>{props.title}</h2>
                    {props.ing.map(dients => (
                        <li key={dients.text}>{dients.text}</li>
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