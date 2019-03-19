import React, { Component } from "react";
import { Link } from "react-router-dom";
import HourlyItem from "./HourlyItem";

class HourlyList extends Component {
  renderedList() {
    return this.props.location.state.tempdata.hourly.data
      .slice(0, 24)
      .map((hourlyData, i) => {
        return (
          <HourlyItem
            key={i}
            dailyData={this.props.location.state.tempdata.daily.data[0]}
            tempData={hourlyData}
          />
        );
      });
  }
  render() {
    return (
      <div>
        <div className="ui top attached buttons" style={{ marginTop: "100px" }}>
          <Link to="/" className="ui black button">
            <i className="arrow alternate circle left icon" />
            Back
          </Link>
        </div>
        <div className="ui attached relaxed divided list segment">
          {this.renderedList()}
        </div>

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
