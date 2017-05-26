import React, { Component } from 'react';
import Key from './Key';

export default class Row extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="row" style={{ backgroundColor: data.bgColor }}>
        {data.keys.map((key, i) => <Key key={i} data={key} />)}
      </div>
    );
  }
}
