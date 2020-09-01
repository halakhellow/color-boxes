import React, { Component } from "react";
import Box from "./Box";

class BoxesContainer extends Component {
  static defaultProps = {
    boxNum: 12,
  };
  render() {
    let boxArr = Array.from({ length: this.props.boxNum });
    return (
      <div>
        <h1>Color Boxes : {this.props.boxNum} Box !</h1>
        {boxArr.map(() => (
          <Box />
        ))}
      </div>
    );
  }
}

export default BoxesContainer;
