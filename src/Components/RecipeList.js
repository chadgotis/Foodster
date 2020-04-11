import React, { useEffect, useState } from 'react';
import '../css/recipelist.css';
// import SearchBox from './Searchbox.js';
import Recipe from './Recipe';
import SearchBox from './SearchBox';

const Recipelist = (props) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        GetRecipe();
    },[])

    const GetRecipe = async () => {
        const APP_ID = "3834705e";
        const APP_KEY = "c23e9514f82c2440abf54b21edd4c3dc";
        const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await res.json();
        setRecipes(data.hits);
      }
    return(
        <div className='recipelist'>
            <SearchBox/>
            <div className="rec">
                {recipes.map(recipe => (
                    <div>
                    <Recipe key={recipe.recipe.label} ing={recipe.recipe.ingredients} title={recipe.recipe.label} pic={recipe.recipe.image} desc={recipe.recipe.source}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recipelist;