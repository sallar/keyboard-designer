import React, { Component } from 'react';
import Row from './Row';

export default class Board extends Component {
  render() {
    const { data } = this.props;
    const { edgeInsets } = data;
    const margin = edgeInsets
      ? `${edgeInsets.top}px ${edgeInsets.right}px ${edgeInsets.bottom}px ${edgeInsets.left}px`
      : 0;

    return (
      <div
        className="board"
        style={{
          backgroundColor: data.bgColor,
          margin
        }}
        >
        {data.rows.map((row, i) => <Row key={i} data={row} />)}
      </div>
    );
  }
}
