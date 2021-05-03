import React, { Component } from 'react';
import './PokeList.scss';
import PokeItem from './PokeItem';

export default class PokeList extends Component {
  render() {
    const { pokemon } = this.props;
    // console.log(pokemon);
    return (
      <ul className='pokemon-list'>
        {pokemon.map(poke => (
          <PokeItem key={poke._id} pokemon={poke}/>
        ))}
      </ul>
    );
  }
}
