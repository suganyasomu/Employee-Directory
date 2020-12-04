import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="title">
    <h1>{props.children}</h1>
 <p className="lead">Search for an employee by name. Click on column header to sort the employees by name.</p>
  </div>
  );
}

export default Title;
