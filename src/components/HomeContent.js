import React, { Component } from "react";
import Button from "./Button";
export default class HomeContent extends Component {
  render() {
    const btn = (
      <Button
        onPress={this.props.onLogin}
        style={{ backgroundColor: "#337ab7", color: "white" }}
      >
        Login
      </Button>
    );
    return <div>{this.props.isloggedin ? null : btn}</div>;
  }
}
