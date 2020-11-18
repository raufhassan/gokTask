import React, { Component } from "react";
import { Link } from "react-router-dom";
export default function User({ history, data }) {
  console.log("sda", history);
  const handleLink = (data) => {
    console.log("pressed");
    console.log(data.name.first);
    history.push({
      pathname: `/${data.name.first}`,
      state: {
        fname: data.name.first,
        lname: data.name.first,
        email: data.email,
        phone: data.phone,
        picture: data.picture.large,
      },
    });
  };

  return (
    <div
      className="card"
      style={{ width: "100%", margin: "10px", height: "1" }}
    >
      <img
        className="card-img-top"
        src={data.picture.large}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{data.name.first + " " + data.name.last}</h5>
        <p className="card-text">{data.email}</p>
        <div style={{ display: "flex" }}>
          <p className="card-text">{data.phone}</p>
          <span
            style={{ color: "blue" }}
            className="ml-auto"
            onClick={() => handleLink(data)}
          >
            View
          </span>
        </div>
      </div>
    </div>
  );
}
