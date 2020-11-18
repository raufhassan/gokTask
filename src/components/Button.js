import React, { Component } from "react";

const styles = {
  button: {
    border: 0,
    margin: 8,
    width: 100,
    padding: 12,
    fontSize: 12,
    borderRadius: 5,
  },
};
export default class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onPress}
        style={{ ...styles.button, ...this.props.style }}
      >
        {this.props.children}
      </button>
    );
  }
}
