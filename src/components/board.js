import React, { Component } from 'react';
import Row from './row';

export default class Board extends Component {
  render() {
    const { data, ...rest } = this.props;
    const { edgeInsets } = data;
    const margin = edgeInsets
      ? `${edgeInsets.top}pt ${edgeInsets.right}pt ${edgeInsets.bottom}pt ${edgeInsets.left}pt`
      : 0;

    return (
      <div
        className="board"
        style={{
          backgroundColor: data.bgColor,
          margin
        }}
        >
        {data.rows.map((row, i) => <Row key={i} index={i} data={row} {...rest} />)}
      </div>
    );
  }
}
