import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
  state = {
    search: '',
    sort: ''
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSortChange = ({ target }) => {
    this.setState({ sort: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {
    const { search } = this.state;

    return (
      <form className='search' onSubmit={this.handleSubmit}>
        <input 
          name="search"
          value={search}
          onChange={this.handleSearchChange}
          placeholder='Search'
        />

        <select onChange={this.handleSortChange}>
          <option value="">Sort...</option>
          <option value="pokemon">by name</option>
          <option value="type_1">by type</option>
        </select>

        <button>🔎</button>
      </form>
    );
  }
}
