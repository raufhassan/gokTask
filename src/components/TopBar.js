import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import MyContext from "../MyContext";
export default class TopBar extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
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
            {context.isloggedin ? (
              <>
                <div style={styles.userbox}>HR</div>
                <Button onPress={context.onLogout} style={styles.btnRed}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button style={styles.btnBlue} onPress={context.onLogin}>
                  Login
                </Button>
                <Button style={styles.btnRed}>Sign Up</Button>
              </>
            )}
          </header>
        )}
      </MyContext.Consumer>
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
  userbox: {
    border: 0,
    margin: 8,
    width: 50,
    padding: 12,
    fontSize: 12,
    borderRadius: "100%",
    color: "white",
    backgroundColor: "#337ab7",
    textAlign: "center",
  },
  btnBlock: {
    float: "right",
    paddingRight: 20,
    display: "flex",
  },
  btnBlue: {
    backgroundColor: "#337ab7",
    color: "white",
  },
  btnRed: {
    backgroundColor: "#f44336",
    color: "white",
  },
};
