import React, { Component } from "react";
import User from "../components/User";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/userActions";
import isEmpty from "../validate/is-empty";
class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const userArr = this.props.users.users;
    if (this.props.users.isLoading) {
      return <Loading />;
    } else if (this.props.users.error !== null) {
      return <h1> Error</h1>;
    } else if (!isEmpty(userArr)) {
      return (
        <div className="container">
          <h1 className="text-center my-5">Users list</h1>
          <div className="row">
            {userArr.map((user, index) => (
              <div key={index} className="col-md-3">
                <User data={user} history={this.props.history} />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <h1>no users</h1>;
    }
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(UserList);
