import React, {Component} from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Content from './Components/Content';
// import {quote} from './Components/List';
// import {foodlist} from './Components/foodlist';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      quotes: [],
      searchfield: '',
      recipes: [],
      random:0
    }
  }

  componentDidMount(){
    const GetQuote = async () => {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      this.setState({quotes: data});
    }
    // const GetRecipe = async () => {
    //   const APP_ID = "3834705e";
    //   const APP_KEY = "c23e9514f82c2440abf54b21edd4c3dc";
    //   const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //   const data = await res.json();
    //   this.setState({recipes: data});
    // }
    GetQuote();
    // GetRecipe();
  }


  render() {
    const quo = this.state.quotes;
    return(
      <div>
        <Nav/>
        <Hero />
          <Content qod={quo.content} author={quo.author}/>
      </div>
    );
  }
}

export default App;
