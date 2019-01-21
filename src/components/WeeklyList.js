import React, { Component } from "react";
import { Link } from "react-router-dom";
import WeeklyItem from "./WeeklyItem";

class WeeklyList extends Component {
  renderedList() {
    return this.props.location.state.tempdata.daily.data
      .slice(0, 7)
      .map(dailyData => {
        return <WeeklyItem tempData={dailyData} />;
      });
  }
  render() {
    console.log(this.props);
    return (
      <div className="">
        <div className="ui top attached buttons">
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

export default WeeklyList;
