import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default class TopBar extends Component {
  render() {
    const auth = (
      <div
        style={{
          float: "right",
          paddingRight: 20,
        }}
      >
        <Button
          style={{
            backgroundColor: "#00578a",
            color: "white",
            // borderRadius: "100%",
            // padding: "5",
          }}
        >
          HR
        </Button>
        <Button
          onPress={this.props.onLogout}
          style={{ backgroundColor: "#f44336", color: "white" }}
        >
          Logout
        </Button>
      </div>
    );
    const guest = (
      <div style={{ float: "right", paddingRight: 20 }}>
        <Button
          style={{ backgroundColor: "#00578a", color: "white" }}
          onPress={this.props.onLogin}
        >
          Login
        </Button>
        <Button style={{ backgroundColor: "#f44336", color: "white" }}>
          Sign Up
        </Button>
      </div>
    );

    return (
      <header style={styles.header}>
        <div style={styles.logo}>
          <Link to="/">
            <img
              alt={"logo"}
              src="favicon-196x196.png"
              style={{ maxHeight: 40, flex: 1 }}
            />
          </Link>
        </div>
        <div style={{ color: "#795548", fontSize: 16 }}>
          {"Geeks of Kolachi"}
        </div>
        <div style={{ float: "left", color: "white", flex: 1 }} />
        {this.props.isloggedin ? auth : guest}
      </header>
    );
  }
}

const styles = {
  logo: {
    margin: 8,
    float: "left",
  },
  header: {
    height: 48,
    width: "100%",
    color: "white",
    display: "flex",
    padding: "6px 10px",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6d4a0",
  },
};
