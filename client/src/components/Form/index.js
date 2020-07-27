import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" sytle={{borderRadius:"12px"}} {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control"  style= {{borderRadius: "12px", backgroundColor: "light blue"}}rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", margin: "4px 2px", borderRadius: "50%", background: "grey", color: "black", border: "none", padding: "20px", textAlign: "center", fontFamily: "fantasy", display: "inline-block", fontSize: "16px", }} className="btn btn-success">
      {props.children}
    </button>
  );
}