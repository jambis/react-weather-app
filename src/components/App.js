import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";
import HourlyList from "./HourlyList";
import WeeklyList from "./WeeklyList";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <HashRouter>
          <div>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <SearchBar />
                  <CitiesList />
                </div>
              )}
            />
            <Route path="/hourly/:cityname" exact component={HourlyList} />
            <Route path="/weekly/:cityname" exact component={WeeklyList} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
