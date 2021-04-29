import { Component } from 'react';
import './App.css';
import React from 'react';
import request from 'superagent';
import Header from './Header';

const POKEDEX_API = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokedex: []
  }

  componentDidMount() {
    this.fetchPokedex();

  }

  async fetchPokedex() {
    

    try {
      const response = await request.get(POKEDEX_API);
      this.setState({ 
        pokedex: response.body
      });

    } catch (ERROR) {
      console.log(ERROR);
    } finally {
      this.setState ({
        pokedex : []
      });
    }
  }

  render() {
    return (
      <div className="App">

        <Header/>

        <main>
          List goes here! 
        </main>
      
      </div>
    );
  }

}

export default App;
