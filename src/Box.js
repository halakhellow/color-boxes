import React, { Component } from "react";
import "./Box.css";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomColor(),
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    let newColor = getRandomColor();
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.changeColor}
      ></div>
    );
  }
}

export default Box;
