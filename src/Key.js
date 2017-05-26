import React, { Component } from 'react';
import cx from 'classnames';
import Icon from 'react-fontawesome';
import chroma from 'chroma-js';

export default class Row extends Component {
  render() {
    const { data } = this.props;

    if (data.isSpacer) {
      return <div className="spacer"></div>;
    }

    const { shadow, edgeInsets } = data;
    const boxShadow = shadow
      ? `${shadow.offsetX}pt ${shadow.offsetY}pt ${shadow.radius}pt ${chroma(shadow.color).alpha(0.5).css()}`
      : 'none';
    const margin = edgeInsets
      ? `${edgeInsets.top}pt ${edgeInsets.right}pt ${edgeInsets.bottom}pt ${edgeInsets.left}pt`
      : 0;

    return (
      <div
        className={cx('key', data.action)}
        style={{
          maxWidth: `${data.ratio}%`,
        }}
        >
        <div
          className='inner'
          style={{
            backgroundColor: data.bgColor,
            color: data.textColor,
            fontSize: `${data.textSize}pt`,
            borderRadius: `${data.cornerRadius}pt`,
            boxShadow,
            margin
          }}
          >
          {
            (data.textFont === 'FontAwesome')
              ? <Icon name={data.title} />
              : data.title
          }
        </div>
      </div>
    );
  }
}
