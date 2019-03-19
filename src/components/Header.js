import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../css/Header.scss";

class Header extends Component {
  render() {
    return (
      <div
        className="ui inverted"
        style={{ zIndex: "1000", position: "fixed", top: "0" }}
      >
        <div className="ui secondary pointing menu">
          <div className="item">
            <div className="ui icon input">
              <SearchBar />
              <i className="search link icon" />
            </div>
          </div>

          <div className="right menu">
            <a className="active item" href="/">
              Home
            </a>
            <a className="item" href="/">
              About
            </a>
            <a className="item" href="/">
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
