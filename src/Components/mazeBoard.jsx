import React, { useState, useEffect, useRef } from "react";
import SquareBox from "./square";

const MazeBoard = (props) => {
  const { mazeArray, spritesArray, startPos: { startColVal, startRowVal } = {} } = props;
  const [greenRowPosition, setGreenRowPosition] = useState(startRowVal);
  const [greenColPosition, setGreenColPosition] = useState(startColVal);
  const [numberOfMoves, setNumberOfMoves] = useState(0);

  

  const mazeBoardFocus = useRef();
  useEffect(() => {
    mazeBoardFocus.current.focus();
  }, []);


  const DIRECTIONS = {
    38: [-1, 0],
    39: [0, 1],
    40: [1, 0],
    37: [0, -1]
  };
  const moves = ({ keyCode }) => {
    if (spritesArray.length === 0) return 
    setNumberOfMoves((curr) => (curr += 1));

    if (keyCode >= 37 && keyCode <= 40) {
      const { 0: row, 1: col } = DIRECTIONS[keyCode];
      setGreenRowPosition((currValue) =>
        currValue + row >= 0 && currValue + row < mazeArray.length
          ? (currValue += row)
          : currValue
      );
      setGreenColPosition((currValue) =>
        currValue + col >= 0 && currValue + col < mazeArray[0].length
          ? (currValue += col)
          : currValue
      );
    }
  };


  const isEqual = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  return (
    <div
      className="main"
      role="button"
      tabIndex="0"
      onKeyDown={(e) => moves(e)}
      ref={mazeBoardFocus}
    >
      <div className="game-live">
        <div>{`You have made`} <span className="move-count">{numberOfMoves}</span> {` move/s`}</div>
        {spritesArray.length !== 0 ? (
          mazeArray.map((arry, rIdx) => {
            return (
              <div className="maze-board" key={rIdx}>
                {arry.map((sq, cIdx) => {
                  const showGreen =
                    greenRowPosition === rIdx && greenColPosition === cIdx;
                  let ind;
                  const showRed = spritesArray.some((el, idx) => {
                    ind = idx;
                    return isEqual(el, [rIdx, cIdx]);
                  });

                  if (showGreen && showRed) {
                    spritesArray.splice(ind, 1);
                  }

                  return (
                    <SquareBox
                      key={rIdx + cIdx}
                      showGreen={showGreen}
                      showRed={showRed}
                    />
                  );
                })}
              </div>
            );
          })
        ) : (
          <div>{`Congratulation 🎉🎉!! You have completed the game in ${numberOfMoves} moves.`}</div>
        )}
      </div>
    </div>
  );
};

export default MazeBoard;
