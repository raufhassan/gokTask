import React, { Component } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { signUp } from "../redux/actions/authActions";
class HomeContent extends Component {
  onLogin = () => {
    this.props.signUp(true);
  };
  render() {
    return (
      <div>
        {this.props.auth.isAuthenticated ? null : (
          <Button
            onPress={this.onLogin}
            style={{ backgroundColor: "#337ab7", color: "white" }}
          >
            Login
          </Button>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { signUp })(HomeContent);
