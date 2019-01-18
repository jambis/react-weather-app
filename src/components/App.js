import React, { Component } from 'react';
import graphhopper from '../apis/graphhopper';
import darksky from '../apis/darksky';
import SearchBar from './SearchBar';
import MainDisplay from './MainDisplay';

class App extends Component {
  state = {
      location: {
        lat: null,
        lng: null
      },
      TemperatureData: null
    }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.location !== this.state.location) {
      let {lat, lng} = this.state.location;
      const response = await darksky.get(`/${lat},${lng}?exclude=flags,alerts,minutely`);
  
      this.setState({TemperatureData: response.data});
    }

  };

  onTermSubmit = async (term) => {
    const response = await graphhopper.get('', {
      params: {q: term}
    });

    let {lng, lat} = response.data.hits[0].point;

    this.setState({location: {lat, lng}});
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit = {this.onTermSubmit} />
        <MainDisplay tempdata = {this.state.TemperatureData} />
      </div>
    );
  };
}

export default App;
