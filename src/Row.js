import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import Key from './Key';

class Row extends Component {
  render() {
    const { data } = this.props;
    const { text, isDragging, connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <div className="row" style={{ backgroundColor: data.bgColor }}>
        {data.keys.map((key, i) => <Key key={i} data={key} />)}
      </div>
    ));
  }
}

const rowSource = {
  beginDrag(props) {
    return {
      id: props.id,
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
    // props.moveCard(dragIndex, hoverIndex);
    console.log('moving', dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    // monitor.getItem().index = hoverIndex;
  },
};

const DragSourceRow = DragSource('key', rowSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(Row);

export default DropTarget('key', rowTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(DragSourceRow);
