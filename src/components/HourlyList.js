import React, { Component } from "react";
import HourlyItem from "./HourlyItem";

class HourlyList extends Component {
  renderedList() {
    return this.props.tempdata.data.map(hourlyData => {
      return <HourlyItem tempdata={hourlyData} />;
    });
  }
  render() {
    return (
      <div className="ui segment">
        <div className="ui relaxed divided list">{this.renderedList()}</div>
      </div>
    );
  }
}

export default HourlyList;
