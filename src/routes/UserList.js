import React, { Component, Fragment } from "react";
import User from "../components/User";
import MyContext from "../MyContext";
import Loading from "../components/Loading";
import isEmpty from "../validate/is-empty";
class UserList extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          if (context.isLoading) {
            return <Loading />;
          } else if (context.errors) {
            return <h1>Error</h1>;
          } else if (!isEmpty(context.users)) {
            return (
              <div className="container">
                <h1 className="text-center my-5">Users list</h1>
                <div className="row">
                  {context.users.map((user, index) => (
                    <div key={index} className="col-md-3">
                      <User data={user} history={this.props.history} />
                    </div>
                  ))}
                </div>
              </div>
            );
          } else {
            return <h1>no user</h1>;
          }
        }}
      </MyContext.Consumer>
    );
  }
}

export default UserList;
