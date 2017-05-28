import React from 'react';
import { connect } from 'react-redux';
import { getActiveKeyboard } from './store/selectors';
import Board from './Board';

const Designer = ({ keyboard }) => (
  <div className="canvas" style={{ backgroundColor: keyboard.boards[0].bgColor }}>
    {keyboard.boards.map((board, i) => <Board key={i} index={i} data={board} />)}
  </div>
);

export default connect(
  state => ({
    keyboard: getActiveKeyboard(state)
  })
)(Designer);
