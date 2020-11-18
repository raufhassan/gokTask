import React, { Component } from "react";
import axios from "axios";
import User from "../components/User";
class UserList extends Component {
  state = { users: [] };
  componentDidMount() {
    axios.get(`https://randomuser.me/api?results=20`).then((res) => {
      const users = res.data;
      this.setState({ users: users.results });
    });
  }
  render() {
    console.log("user", this.state.users);
    if (this.state.users) {
      return (
        <div className="container">
          <h1 className="text-center my-5">Users list</h1>
          <div className="row">
            {this.state.users.map((user) => (
              <div className="col-md-3">
                <User data={user} history={this.props.history} />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <h5>Loading</h5>;
    }
  }
}

export default UserList;
