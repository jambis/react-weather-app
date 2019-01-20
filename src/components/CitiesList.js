import React, { Component } from "react";
import CityItem from "./CityItem";

class CitiesList extends Component {
  renderedList() {
    let i = 0;
    return this.props.cities.map(city => {
      i++;
      return (
        <CityItem
          key={city.osm_id}
          cityname={city.name}
          tempdata={this.props.tempdata[i - 1]}
        />
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        <div>{this.renderedList()}</div>
      </div>
    );
  }
}

export default CitiesList;
