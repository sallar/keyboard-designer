import React, { Component } from 'react';
import flow from 'lodash/flow';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import cx from 'classnames';
import Icon from 'react-fontawesome';
import chroma from 'chroma-js';
import { ItemTypes } from '../utils/types';

class Key extends Component {
  render() {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const {
      isSpacer,
      shadow,
      edgeInsets,
      action,
      ratio,
      bgColor,
      textColor,
      textSize,
      textFontName,
      cornerRadius,
      title
    } = this.props;

    if (isSpacer) {
      return <div className="spacer"></div>;
    }

    const boxShadow = shadow
      ? `${shadow.offsetX}pt ${shadow.offsetY}pt ${shadow.radius}pt ${chroma(shadow.color).alpha(0.5).css()}`
      : 'none';
    const margin = edgeInsets
      ? `${edgeInsets.top}pt ${edgeInsets.right}pt ${edgeInsets.bottom}pt ${edgeInsets.left}pt`
      : 0;

    return connectDragSource(connectDropTarget(
      <div
        className={cx(ItemTypes.KEY, action)}
        style={{
          maxWidth: `${ratio}%`,
        }}
        >
        <div
          className='inner'
          style={{
            backgroundColor: bgColor,
            color: textColor,
            fontSize: `${textSize}pt`,
            fontFamily: textFontName,
            borderRadius: `${cornerRadius}pt`,
            opacity: isDragging ? 1 : 1,
            boxShadow,
            margin
          }}
          >
          {
            (textFontName === 'FontAwesome')
              ? <Icon name={title} />
              : title
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
  // canDrag() {
  //   return false;
  // }
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
    console.log('moving key', dragIndex, hoverIndex);
    props.onMoveKey(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
};

export default flow(
  DropTarget(props => props.rowId, keyTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })),
  DragSource(props => props.rowId, keySource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))
)(Key);
