import { Component } from 'react';
import './App.css';
import React from 'react';
import request from 'superagent';
import Header from './Header';
import PokeList from '../pokemon/PokeList';
import Search from './Search';

const POKEDEX_API = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: [],
    loading: true,
    search: this.state,
    sort: undefined
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { search, sort } = this.state;

    this.setState({ loading: true });

    try {
      const response = await request
        .get(POKEDEX_API)
        .query({ pokemon: search })
        .query({ sort: sort || undefined })
        .query({ direction: 'asc' });

      this.setState({ 
        pokemon: response.body.results
      });

    } catch (ERROR) {
      console.log(ERROR);
    } finally {
      this.setState ({
        pokedex : []
      });
    }
  }

  handleSearch = ({ search, sort }) => {
    console.log(search, sort);
    this.setState(
      { search: search,
        sort: sort },
      () => this.fetchPokemon()
    );

    

  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header/>
        

        <section className="search-bar">
          <Search onSearch={this.handleSearch}/>
        </section>

        <main>
          {pokemon && (pokemon.length ? <PokeList pokemon={pokemon}/>
            : <p>Sorry no Pokemon!</p>)}
          
        </main>
      
      </div>
    );
  }

}

export default App;
