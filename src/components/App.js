import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import graphhopper from "../apis/graphhopper";
import darksky from "../apis/darksky";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";

class App extends Component {
  state = { cities: [], tempdata: [] };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.cities !== this.state.cities) {
      let { lat, lng } = this.state.cities[this.state.cities.length - 1].point;
      const response = await darksky.get(
        `/${lat},${lng}?exclude=flags,alerts,minutely`
      );

      this.setState({ tempdata: [...this.state.tempdata, response.data] });
    }
  };

  onTermSubmit = async term => {
    const response = await graphhopper.get("", {
      params: { q: term }
    });

    this.setState({ cities: [...this.state.cities, response.data.hits[0]] });
  };

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <SearchBar onSubmit={this.onTermSubmit} />
                  <CitiesList
                    cities={this.state.cities}
                    tempdata={this.state.tempdata}
                  />
                </div>
              )}
            />
            <Route
              path="/hourly/:cityname"
              exact
              render={() => <div>Hourly Forecast</div>}
            />
            <Route
              path="/weekly/:cityname"
              exact
              render={() => <div>Weekly Forecast</div>}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
