import React, { Component } from "react";
import _ from "lodash";
import HourlyItem from "./HourlyItem";

class HourlyList extends Component {
  renderedList() {
    return this.props.location.state.tempdata.hourly.data
      .slice(0, 24)
      .map(hourlyData => {
        return (
          <HourlyItem
            key={_.uniqueId}
            dailyData={this.props.location.state.tempdata.daily.data[0]}
            tempData={hourlyData}
          />
        );
      });
  }
  render() {
    console.log(this.props);
    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}

export default HourlyList;
