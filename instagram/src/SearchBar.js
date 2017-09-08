import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this is the value of the input form
      newSearch: '',
      // key - input
      search: []
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.addSearch = this.addSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({ 
      newSearch: event.target.value
    });
  }

  addSearch(event) {
    // stops page from reloading
    event.preventDefault();
    console.log(this.state.newSearch);
    this.setState({
      newSearch: '',
      search: this.state.search.concat(this.state.newSearch)
    });
  }

  render() {
    return (
      <div>Instagram Search
        <form onSubmit={this.addSearch}>
          <input
            onChange={this.updateSearch}
            placeholder="...search"
            value={this.state.newSearch}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;