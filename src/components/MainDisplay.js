import React, { Component } from 'react';

class MainDisplay extends Component {
    render() {
            if (!this.props.tempdata) {

                return <div>Loading...</div>;
            }else{
                console.log(this.props.tempdata);
                return <div>Currently: {this.props.tempdata.currently.temperature}°</div>

            }
    };
}

export default MainDisplay;