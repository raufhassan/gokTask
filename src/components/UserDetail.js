import React, { Component } from "react";
import Button from "../components/Button";
import isEmpty from "../validate/is-empty";
class UserDetail extends Component {
  render() {
    let data = this.props.history.location.state.data;
    if (!isEmpty(data)) {
      return (
        <div className="container p-5">
          <Button
            onPress={() => this.props.history.push("/users")}
            style={{ backgroundColor: "grey", color: "#fff" }}
          >
            Back
          </Button>
          <div className="row">
            <div className="col-sm-6">
              <img
                src={data?.picture?.large}
                style={{ width: "100%", height: "100%" }}
                alt={"profile pic"}
              />
            </div>
            <div className="col-sm-6">
              <div>
                <h3>{data?.name?.first.concat(" ", data?.name?.last)}</h3>
                <p>{data?.email}</p>
                <p>{data?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h3>no details</h3>;
    }
  }
}

export default UserDetail;
