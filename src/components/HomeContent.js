import React, { Component } from "react";
import Button from "./Button";
export default class HomeContent extends Component {
  render() {
    return (
      <div>
        <Button style={{ backgroundColor: "#337ab7", color: "white" }}>
          Login
        </Button>
      </div>
    );
  }
}
