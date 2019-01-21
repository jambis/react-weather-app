import React, { Component } from "react";
import _ from "lodash";
import moment from "moment";
import { Link } from "react-router-dom";
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
  WiDaySunnyOvercast,
  WiHumidity,
  WiUmbrella,
  WiBarometer,
  WiThermometer
} from "weather-icons-react";
import "../css/CityItem.css";

class CityItem extends Component {
  renderIcon() {
    /*
    values: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night. 
    (Developers should ensure that a sensible default is defined, as additional values, such as hail, thunderstorm, 
    or tornado, may be defined in the future.)
    */
    let iconSize = 48;
    let iconColor = "#000";
    switch (this.props.tempdata.currently.icon) {
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

  renderDescription() {
    let oldDesc = this.props.tempdata.currently.icon;
    let newDesc = _.replace(oldDesc, /-/g, " ");
    return _.startCase(newDesc);
  }
  setClassName() {
    let sunsetTime = moment.unix(this.props.tempdata.daily.data[0].sunsetTime);
    let sunriseTime = moment.unix(
      this.props.tempdata.daily.data[0].sunriseTime
    );
    let currentTime = moment.unix(this.props.tempdata.currently.time);

    if (_.inRange(currentTime.hour(), sunriseTime.hour(), sunsetTime.hour())) {
      return "city-day-bg";
    } else {
      return "city-night-bg";
    }
  }

  renderItem() {
    let {
      temperature,
      precipProbability,
      humidity,
      pressure,
      visibility,
      apparentTemperature,
      summary
    } = this.props.tempdata.currently;

    return (
      <div className="City-Item">
        <div className="ui attached segment">
          <div className={`ui center aligned grid ${this.setClassName()}`}>
            <div className="row">
              <div
                className="four wide column"
                data-tooltip={summary}
                data-inverted=""
              >
                {this.renderIcon()}
                <h3 className="ui header" style={{ marginTop: "0" }}>
                  {this.renderDescription()}
                </h3>
              </div>
              <div className="eight wide column">
                <h1 className="ui header" style={{ marginTop: "1em" }}>
                  {this.props.cityname.name}
                </h1>
              </div>
              <div
                className="four wide column"
                data-tooltip={`Feels like ${_.round(apparentTemperature, 0)}°F`}
                data-inverted=""
              >
                <WiThermometer
                  size={48}
                  color="#000"
                  style={{ marginTop: "0" }}
                />
                <h1 className="ui header" style={{ marginTop: "0" }}>
                  {_.round(temperature, 0)}°F
                </h1>
              </div>
            </div>
            <div className="ui divider" />
            <div className="row">
              <div
                className="four wide column"
                data-tooltip="Chance of rain"
                data-inverted=""
              >
                <WiUmbrella size={48} color="#000" />
                <h3 className="ui header" style={{ marginTop: "0" }}>
                  {_.round(precipProbability, 2) * 100}%
                </h3>
              </div>
              <div
                className="four wide column"
                data-tooltip="Humidity percentage."
                data-inverted=""
              >
                <WiHumidity size={48} color="#000" />
                <h3 className="ui header" style={{ marginTop: "0" }}>
                  {_.round(humidity, 2) * 100}%
                </h3>
              </div>
              <div
                className="four wide column"
                data-tooltip="Pressure at sea level in millibars"
                data-inverted=""
              >
                <WiBarometer size={48} color="#000" />
                <h3 className="ui header" style={{ marginTop: "0" }}>
                  {pressure} mbar
                </h3>
              </div>
              <div
                className="four wide column"
                data-tooltip="Visibility in miles."
                data-inverted=""
              >
                <WiFog size={48} color="#000" />
                <h3 className="ui header" style={{ marginTop: "0" }}>
                  {visibility} mi
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="ui two bottom attached buttons City-Item__Btn">
          <Link
            to={{
              pathname: `/hourly/${this.props.cityname.name}`,
              state: { tempdata: this.props.tempdata }
            }}
            className="ui black button"
          >
            <i className="clock outline icon" />
            24h Forecast
          </Link>
          <Link
            to={{
              pathname: `/weekly/${this.props.cityname.name}`,
              state: { tempdata: this.props.tempdata }
            }}
            className="ui black button"
          >
            <i className="calendar alternate outline icon" />
            Weekly Forecast
          </Link>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.tempdata) {
      return this.renderItem();
    } else {
      return (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui massive text loader">
              Fetching data for {this.props.cityname.name}
            </div>
          </div>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </div>
      );
    }
  }
}

export default CityItem;
