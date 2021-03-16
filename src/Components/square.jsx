import React from "react";
import { Saviour, Sprites } from "./saviour";
import "../App.css";

const SquareBox = ({ showGreen, showRed }) => {
  let liveSprite = showRed;
  // if (showGreen && showRed) {
  //   console.log(showGreen, showRed);

  //   liveSprite = !liveSprite;
  // }

  return showGreen ? (
    <button className="square-box">
      <Saviour />
    </button>
  ) : showRed && liveSprite ? (
    <button className="square-box">
      <Sprites />
    </button>
  ) : (
    <button className="square-box"></button>
  );
};

export default SquareBox;
