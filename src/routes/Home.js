import React, { Component } from "react";
import Button from "../components/Button";
import TopBar from "../components/TopBar";
import HomeContent from "../components/HomeContent";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <HomeContent
          isloggedin={this.props.isloggedin}
          onLogin={this.props.onLogin}
        />
        <Button>
          <Link to="/users"> User list</Link>
        </Button>
      </div>
    );
  }
}
