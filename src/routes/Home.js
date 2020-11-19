import React, { Component } from "react";
import Button from "../components/Button";
import HomeContent from "../components/HomeContent";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <HomeContent />
        <Button>
          <Link to="/users"> User list</Link>
        </Button>
      </div>
    );
  }
}
