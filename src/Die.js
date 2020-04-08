import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div>
        <i
          className={`Die fas fa-dice-${this.props.face} fa-6x ${
            this.props.isRolling ? "shaking" : ""
           }`}
          style={{ color: "blue" }}
        ></i>
        {/* <i class="fa fa-car"></i> */}
      </div>
    );
  }
}

export default Die;
