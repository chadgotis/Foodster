import React, { useEffect, useState} from 'react';
import '../css/recipelist.css';
// import SearchBox from './Searchbox.js';
import Recipe from './Recipe';
import SearchBox from './SearchBox';

const Recipelist = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('steak');
    const [isSearch, setisSearch] = useState(false);

    useEffect(() => {
        const GetRecipe = async () => {
            const APP_ID = "3834705e";
            const APP_KEY = "c23e9514f82c2440abf54b21edd4c3dc";
            const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const data = await res.json();
            setRecipes(data.hits);
          }
        GetRecipe();
        const searchResultHandle = () => {
            setisSearch(query);
        }
        searchResultHandle();
    },[query])

    const updateSearch = e => {
        setSearch(e.target.value);
      };
    
      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
      };

    return(
        <div className='recipelist'>
            <SearchBox searchRes= {isSearch} change={updateSearch} submit={getSearch}/>
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