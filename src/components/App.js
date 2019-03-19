import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./Header";
import CitiesList from "./CitiesList";
import HourlyList from "./HourlyList";
import WeeklyList from "./WeeklyList";
import "normalize.css";
import "../css/app.scss";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <HashRouter>
          <div>
            <Route path="/" exact component={CitiesList} />
            <Route path="/hourly/:cityname" exact component={HourlyList} />
            <Route path="/weekly/:cityname" exact component={WeeklyList} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
