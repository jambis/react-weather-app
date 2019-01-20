import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Search for a city..."
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
