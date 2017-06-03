import React, { Component } from 'react';
import flow from 'lodash/flow';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import Key from './key';

class Row extends Component {
  handleMoveKey = (from, to) => {
    const { onMoveKey, uuid } = this.props;
    onMoveKey({
      id: uuid,
      from,
      to
    });
  }

  render() {
    const { uuid, keys, bgColor, isDragging, connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <div
        className="row"
        style={{ backgroundColor: bgColor, opacity: isDragging ? 1 : 1 }}
        >
        {keys.map((key, i) => (
          <Key key={i} index={i} {...key} rowId={uuid} onMoveKey={this.handleMoveKey} />
        ))}
      </div>
    ));
  }
}

const rowSource = {
  beginDrag(props) {
    return {
      id: props.uuid,
      index: props.index,
    };
  },
};

const rowTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.onMoveRow(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
};

export default flow(
  DropTarget(props => props.boardId, rowTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })),
  DragSource(props => props.boardId, rowSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))
)(Row);
