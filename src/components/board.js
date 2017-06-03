import React, { Component } from 'react';
import Row from './row';

export default class Board extends Component {
  handleMoveRow = (from, to) => {
    const { onMoveRow, data } = this.props;
    onMoveRow({
      id: data.uuid,
      from,
      to
    });
  }

  onReceiveNewProps() {
    console.log('bam');
  }

  render() {
    const { data } = this.props;
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
        {data.rows.map((row, i) => (
          <Row
            key={i}
            index={i}
            data={row}
            onMoveRow={this.handleMoveRow}
            />
        ))}
      </div>
    );
  }
}
