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
      ? `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.radius}px ${chroma(shadow.color).alpha(0.5).css()}`
      : 'none';
    const margin = edgeInsets
      ? `${edgeInsets.top}px ${edgeInsets.right}px ${edgeInsets.bottom}px ${edgeInsets.left}px`
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
            fontSize: `${data.textSize}px`,
            borderRadius: `${data.cornerRadius}px`,
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
