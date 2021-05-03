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
    pokemon: []
  }

  // handleSearch = ({ search }) => {
  //   this.setState(
  //     { search: search, page: 1 },
  //     () => this.fetchPokemon()
  //   );
  // }

  async componentDidMount() {
    const response = await request.get(POKEDEX_API);
    this.setState({ pokemon: response.body.results });
  }

  // async fetchPokemon() {
  //   const { search, page } = this.state;

  //   this.setState({ loading: true });

  //   try {
  //     const response = await request
  //       .get(POKEDEX_API)
  //       .query({ name: search })
  //       .query({ page: page });

  //     this.setState({ 
  //       pokedex: response.body
  //     });

  //   } catch (ERROR) {
  //     console.log(ERROR);
  //   } finally {
  //     this.setState ({
  //       pokedex : []
  //     });
  //   }
  // }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header/>
        <PokeList pokemon={pokemon}/>

        <section className="search-bar">
          <Search onSearch={this.handleSearch}/>
        </section>

        <main>
          
        </main>
      
      </div>
    );
  }

}

export default App;
