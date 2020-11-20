import React, { Component } from "react";
export default function User({ history, data }) {
  const handleLink = (data) => {
    history.push(`/${data.name.first}`, { data });
  };
  return (
    <div
      className="card"
      style={{ width: "100%", margin: "10px", height: "1" }}
    >
      <img
        className="card-img-top"
        src={data?.picture?.large}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">
          {data?.name?.first.concat(" ", data?.name?.last)}
        </h5>
        <p className="card-text">{data?.email}</p>
        <div style={{ display: "flex" }}>
          <p className="card-text">{data?.phone}</p>
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
