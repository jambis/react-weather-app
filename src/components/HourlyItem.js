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

class HourlyItem extends Component {
  renderIcon() {
    /*
        values: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night. 
        (Developers should ensure that a sensible default is defined, as additional values, such as hail, thunderstorm, 
        or tornado, may be defined in the future.)
        */
    let iconSize = 48;
    let iconColor = "#4C4CFF";
    switch (this.props.tempdata.icon) {
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
    let timeUnix = moment.unix(this.props.tempdata.time);
    return timeUnix.format("h:mm A (ddd)");
  }

  getRainPercent() {
    if (this.props.tempdata.precipProbability === 0) {
      return "No Rain";
    } else {
      return `${_.round(this.props.tempdata.precipProbability, 2) * 100}%`;
    }
  }

  renderItem() {
    return (
      <div className="ui grid">
        <div className="four column wide">{this.renderIcon()}</div>
        <div className="eight column wide">
          {this.getTime()} {"\n"} {this.props.tempdata.summary}
        </div>
        <div className="four column wide">
          {this.props.tempdata.temperature} {"\n"} {this.getRainPercent()}
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderItem()}</div>;
  }
}

export default HourlyItem;