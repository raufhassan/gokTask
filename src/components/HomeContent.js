import React, { Component } from "react";
import Button from "./Button";
import MyContext from "../MyContext";
export default class HomeContent extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div>
            {!context.isloggedin ? (
              <Button
                onPress={context.onLogin}
                style={{ backgroundColor: "#337ab7", color: "white" }}
              >
                Login
              </Button>
            ) : null}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
