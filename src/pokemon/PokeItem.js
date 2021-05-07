import React, { Component } from 'react';
import './PokeItem.css';

export default class PokeItem extends Component {
  render() {
    const pokemon = this.props.pokemon;
    
    return (
      <li className="PokeItem">
        <h2>{pokemon.pokemon}</h2>
        <img src={pokemon.url_image} alt=''/>
        <h3>Type: {pokemon.type_1}</h3>
        <h4>Ability: {pokemon.ability_1}</h4>
      </li>
    );
  }
}
