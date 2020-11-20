import MyContext from "./MyContext";
import React, { Component } from "react";
import axios from "axios";

class MyProvider extends Component {
  state = { isloggedin: false, users: [], isLoading: true, errors: null };
  componentDidMount() {
    axios
      .get(`https://randomuser.me/api?results=20`)
      .then((res) => {
        const users = res.data;
        this.setState({ users: users.results, isLoading: false });
      })
      .catch((err) => {
        this.setState({ errors: err, isLoading: false });
      });
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          isloggedin: this.state.isloggedin,
          isLoading: this.state.isLoading,
          errors: this.state.errors,
          users: this.state.users,
          onLogin: () => {
            this.setState({ isloggedin: true });
          },
          onLogout: () => {
            this.setState({ isloggedin: false });
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
