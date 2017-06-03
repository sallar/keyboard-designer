import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import cx from 'classnames';
import Icon from 'react-fontawesome';
import chroma from 'chroma-js';
import { ItemTypes } from './utils/types';

class Key extends Component {
  render() {
    const { data, isDragging, connectDragSource, connectDropTarget } = this.props;

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

    return connectDragSource(connectDropTarget(
      <div
        className={cx(ItemTypes.KEY, data.action)}
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
            fontFamily: data.textFontName,
            borderRadius: `${data.cornerRadius}pt`,
            opacity: isDragging ? 0 : 1,
            boxShadow,
            margin
          }}
          >
          {
            (data.textFontName === 'FontAwesome')
              ? <Icon name={data.title} />
              : data.title
          }
        </div>
      </div>
    ));
  }
}

const keySource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const keyTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientX = clientOffset.x - hoverBoundingRect.left;

    // Dragging left
    if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
      return;
    }

    // Dragging right
    if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
      return;
    }

    // Time to actually perform the action
    // props.moveCard(dragIndex, hoverIndex);
    console.log('moving', dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    // monitor.getItem().index = hoverIndex;
  },
};

const DragSourceKey = DragSource(ItemTypes.KEY, keySource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(Key);

export default DropTarget(ItemTypes.KEY, keyTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(DragSourceKey);
