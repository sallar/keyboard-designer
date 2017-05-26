import React, { Component } from 'react';
import Row from './Row';

export default class Board extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="board" style={{backgroundColor: data.bgColor}}>
        {data.rows.map((row, i) => <Row key={i} data={row} />)}
      </div>
    );
  }
}
