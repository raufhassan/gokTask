import React, { Component } from "react";
import Loader from "react-loader-spinner";
class Loading extends Component {
  render() {
    return (
      <div style={style.LoadBlock}>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
}
const style = {
  LoadBlock: {
    textAlign: "center",
    marginTop: "20%",
  },
};

export default Loading;
