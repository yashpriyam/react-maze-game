import React, { useState } from "react";
import MazeBoard from "./Components/mazeBoard";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    width: "",
    height: "",
  });

  const [showMazeBoard, setShowMazeBoard] = useState(false);

  const createMazeBoard = () => {
    setShowMazeBoard(!showMazeBoard);
  };

  const inputChangeHanlder = (e) => {
    setState({
      ...state,
      [e.target.name]: [e.target.value],
    });
  };

  const { height, width } = state;
  const rows = Number(height);
  const cols = Number(width);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const startRowVal = getRandomInt(0, rows - 1);
  const startColVal = getRandomInt(0, cols - 1);

  function createSpritesArray() {
    const spritesArray = new Array(Math.round((rows * cols) / 10))
    .fill(1);
    spritesArray.forEach((el, idx, arr) => arr[idx] = [getRandomInt(0, rows - 1), getRandomInt(0, cols - 1)]);

    return spritesArray;
  }

  const mazeArray = () => new Array(rows).fill(new Array(cols).fill(1));

  return (
    <div>
      <input
        name="height"
        type="number"
        min={1}
        value={state.height}
        placeholder="height"
        onChange={inputChangeHanlder}
      />
      <input
        name="width"
        type="number"
        min={1}
        value={state.width}
        placeholder="width"
        onChange={inputChangeHanlder}
      />

      <button onClick={createMazeBoard}>Create</button>

      {showMazeBoard && (
        <MazeBoard
          mazeArray={mazeArray()}
          spritesArray={createSpritesArray()}
          startPos={{ startRowVal, startColVal }}
        />
      )}
    </div>
  );
};

export default App;
