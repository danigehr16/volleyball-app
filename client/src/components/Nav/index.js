import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a className="navbar-brand" href="/" style={{fontFamily:"arial", fontSize:"12px"}}>
        KineticNRG
      </a>
      <a className="navbar-brand" href="/events" style={{fontFamily:"arial", fontSize:"12px", padding:"4px"}}>
        Events
      </a>
    </nav>
  );
}

export default Nav;