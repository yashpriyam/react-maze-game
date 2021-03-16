import React from "react";
import { Saviour, Sprites } from "./saviour";
import "../App.css";

const SquareBox = ({ showGreen, showRed }) => {
  return showGreen ? (
    <button className="square-box">
      <Saviour />
    </button>
  ) : showRed ? (
    <button className="square-box">
      <Sprites />
    </button>
  ) : (
    <button className="square-box"></button>
  );
};

export default SquareBox;
