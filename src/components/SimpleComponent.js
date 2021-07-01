import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "happy",
    };
  }

  handleClick = () => {
    this.setState((prev) => {
      if (prev.mood === "happy")
        return {
          mood: "sad",
        };
      return {
        mood: "happy",
      };
    });
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
