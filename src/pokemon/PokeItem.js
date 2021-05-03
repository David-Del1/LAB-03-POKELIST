import React, { Component } from 'react';
import './PokeItem.css';

export default class PokeItem extends Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(pokemon);
    return (
      <li className="PokeItem">
        <h2>{pokemon.pokemon}</h2>
        <img src={pokemon.url_image} alt=''/>
      </li>
    );
  }
}
