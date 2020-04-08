import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      isRolling: false,
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    this.setState({
      die1: this.props.sides[
        Math.floor(Math.random() * this.props.sides.length)
      ],
      die2: this.props.sides[
        Math.floor(Math.random() * this.props.sides.length)
      ],
      isRolling: true,
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice ">
        <Die face={this.state.die1} isRolling={this.state.isRolling}></Die>
        <Die face={this.state.die2} isRolling={this.state.isRolling}></Die>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling" : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
