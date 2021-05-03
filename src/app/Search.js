import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
  state = {
    search: ''
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
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
        />

        <button>🔎</button>
      </form>
    );
  }
}
