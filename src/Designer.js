import React from 'react';
import { connect } from 'react-redux';
import { getActiveKeyboard } from './store/selectors';
import Board from './Board';

const Designer = ({ keyboard }) => (
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

export default connect(
  state => ({
    keyboard: getActiveKeyboard(state)
  })
)(Designer);
