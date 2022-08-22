import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div
      className="w-100 vh-100 d-flex align-items-center justify-content-center"
      style={{ background: "#0A192F" }}
    >
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
