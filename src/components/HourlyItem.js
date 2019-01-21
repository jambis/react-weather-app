import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import {
  WiDaySunny,
  WiNightClear,
  WiRain,
  WiSnow,
  WiSleet,
  WiWindy,
  WiFog,
  WiCloudy,
  WiHail,
  WiTornado,
  WiCloud,
  WiThunderstorm,
  WiNightAltPartlyCloudy,
  WiDaySunnyOvercast
} from "weather-icons-react";
import "../css/HourlyItem.css";

class HourlyItem extends Component {
  renderIcon() {
    /*
        values: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night. 
        (Developers should ensure that a sensible default is defined, as additional values, such as hail, thunderstorm, 
        or tornado, may be defined in the future.)
        */
    let iconSize = 54;
    let iconColor = "#000";
    switch (this.props.tempData.icon) {
      case "clear-day":
        return <WiDaySunny size={iconSize} color={iconColor} />;
      case "clear-night":
        return <WiNightClear size={iconSize} color={iconColor} />;
      case "rain":
        return <WiRain size={iconSize} color={iconColor} center />;
      case "snow":
        return <WiSnow size={iconSize} color={iconColor} />;
      case "sleet":
        return <WiSleet size={iconSize} color={iconColor} />;
      case "wind":
        return <WiWindy size={iconSize} color={iconColor} />;
      case "fog":
        return <WiFog size={iconSize} color={iconColor} />;
      case "cloudy":
        return <WiCloudy size={iconSize} color={iconColor} />;
      case "partly-cloudy-day":
        return <WiDaySunnyOvercast size={iconSize} color={iconColor} />;
      case "partly-cloudy-night":
        return <WiNightAltPartlyCloudy size={iconSize} color={iconColor} />;
      case "tornado":
        return <WiTornado size={iconSize} color={iconColor} />;
      case "hail":
        return <WiHail size={iconSize} color={iconColor} />;
      case "thunderstorm":
        return <WiThunderstorm size={iconSize} color={iconColor} />;
      default:
        return <WiCloud size={iconSize} color={iconColor} />;
    }
  }

  getTime() {
    let timeUnix = moment.unix(this.props.tempData.time);
    return timeUnix.format("h:mm A (ddd)");
  }

  getRainPercent() {
    if (this.props.tempData.precipProbability === 0) {
      return "No Rain";
    } else {
      return `${_.round(this.props.tempData.precipProbability, 2) * 100}%`;
    }
  }

  setClassName() {
    console.log(this.props.dailyData);
    let sunsetTime = moment.unix(this.props.dailyData.sunsetTime);
    let sunriseTime = moment.unix(this.props.dailyData.sunriseTime);
    let currentTime = moment.unix(this.props.tempData.time);

    if (_.inRange(currentTime.hour(), sunriseTime.hour(), sunsetTime.hour())) {
      return "day-bg";
    } else {
      return "night-bg";
    }
  }

  renderItem() {
    return (
      <div className="ui segment">
        <div className="ui center aligned grid">
          <div className={`row ${this.setClassName()}`}>
            <div className="four wide column">{this.renderIcon()}</div>
            <div className="eight wide column">
              <h2 className="ui header">{this.getTime()}</h2>
              <h3 className="ui header" style={{ marginTop: "0" }}>
                {this.props.tempData.summary}
              </h3>
            </div>
            <div className="four wide column">
              <h2 className="ui header">
                {_.round(this.props.tempData.temperature, 0)}°F
              </h2>
              <h3 className="ui header" style={{ marginTop: "0" }}>
                {this.getRainPercent()}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderItem()}</div>;
  }
}

export default HourlyItem;
