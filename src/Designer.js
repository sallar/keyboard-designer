import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Board from './Board';
import def from './keyboard.json';

export default class Designer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: def.boards
    };
  }

  render() {
    return (
      <div className="canvas" style={{ backgroundColor: this.state.boards[0].bgColor }}>
        {this.state.boards.map((board, i) => <Board key={i} index={i} data={board} />)}
      </div>
    );
  }
}
