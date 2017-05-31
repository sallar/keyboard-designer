import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Board from './Board';

export default DragDropContext(HTML5Backend)(({ keyboard }) => (
  <div className="scene">
    <h1>{keyboard.name}</h1>
    <h4>By {keyboard.author}</h4>
    {keyboard.boards.map((board, i) => (
      <div key={i}  className="canvas" style={{ backgroundColor: board.bgColor }}>
        <Board index={i} data={board} />
      </div>
    ))}
  </div>
));
