import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
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
    return (
      <div className="ui relaxed divided list">
        <div className="ui top attached buttons">
          <Link to="/" className="ui black button">
            <i className="arrow alternate circle left icon" />
            Back
          </Link>
        </div>
        <div className="ui attached segment">{this.renderedList()}</div>

        <div className="ui bottom attached buttons">
          <Link to="/" className="ui black button">
            <i className="arrow alternate circle left icon" />
            Back
          </Link>
        </div>
      </div>
    );
  }
}

export default HourlyList;
