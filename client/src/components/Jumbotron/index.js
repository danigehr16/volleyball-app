import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", background: "none", fontFamily: "fantasy",  backgroundImage:"./tornado.jpeg" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;