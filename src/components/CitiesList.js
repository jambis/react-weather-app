import React, { Component } from "react";
import CityItem from "./CityItem";
import { connect } from "react-redux";
import "../css/CityList.scss";

class CitiesList extends Component {
  renderedList() {
    return this.props.weather.cities.map((city, i) => {
      return (
        <CityItem
          key={i}
          datakey={i}
          cityname={city}
          tempdata={this.props.weather.tempdata[i]}
        />
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}

const mapStateToProps = state => {
  return { weather: state.weather };
};
export default connect(mapStateToProps)(CitiesList);
