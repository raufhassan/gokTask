import React, { Component } from "react";
import Button from "../components/Button";
class UserDetail extends Component {
  state = {};
  componentDidMount() {}
  render() {
    /* let id = this.props.match.params.userid;
    console.log("id", id); */
    let data = this.props.history.location.state;
    if (data) {
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
                src={data.picture}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-sm-6">
              <div>
                <h3>{data.fname}</h3>
                <p>{data.email}</p>
                <p>{data.phone}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h3>Loading</h3>;
    }
  }
}

export default UserDetail;
