import React from 'react';
import Board from './Board';

export default ({ keyboard }) => (
  <div className="scene">
    <h1>{keyboard.name}</h1>
    <h4>By {keyboard.author}</h4>
    {keyboard.boards.map((board, i) => (
      <div key={i}  className="canvas" style={{ backgroundColor: board.bgColor }}>
        <Board index={i} data={board} />
      </div>
    ))}
  </div>
);
