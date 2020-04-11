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
    GetQuote();
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
