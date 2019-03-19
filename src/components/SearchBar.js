import React, { Component } from "react";
import { connect } from "react-redux";
import { searchLocation, fetchWeather } from "../actions";
import "../css/SearchBar.scss";
class SearchBar extends Component {
  state = { term: "" };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.weather.cities < this.props.weather.cities) {
      let { lat, lng } = this.props.weather.cities[
        this.props.weather.cities.length - 1
      ].point;
      this.props.fetchWeather(lat, lng);
    }
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.searchLocation(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <input
          id="search"
          placeholder="Search for a city..."
          onChange={this.onInputChange}
          value={this.state.term}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

export default connect(
  mapStateToProps,
  { searchLocation, fetchWeather }
)(SearchBar);
