import React, { Component } from 'react';
import Row from './Row';

export default class Board extends Component {
  render() {
    const { data, index } = this.props;
    const { edgeInsets } = data;
    const margin = edgeInsets
      ? `${edgeInsets.top}pt ${edgeInsets.right}pt ${edgeInsets.bottom}pt ${edgeInsets.left}pt`
      : 0;

    return (
      <div
        className="board"
        style={{
          zIndex: -(index),
          backgroundColor: data.bgColor,
          margin
        }}
        >
        {data.rows.map((row, i) => <Row key={i} data={row} />)}
      </div>
    );
  }
}
