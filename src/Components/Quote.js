import React from 'react';
import '../css/quote.css';



const Quote = (props) => {

    return(
        <div className='quoteBody'>
            <h3>Quote of The day</h3>
            <blockquote cite={props.author} >"{props.qod}"</blockquote>
        </div>
    );
}

export default Quote;