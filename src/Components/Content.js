import React from 'react';
import Quote from './Quote';
import RecipeList from './RecipeList';
import '../css/content.css';


const content = (props) => {
    return(
        <div>
            <main>
                <div className='dayquote'>
                    <Quote qod={props.qod} author={props.author}/>
                </div>
                <div className='recipelist'>
                    <RecipeList />
                </div>
            </main>
        </div>
    );
}

export default content;