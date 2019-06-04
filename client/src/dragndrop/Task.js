import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Task.css';
class Task extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {({ dragHandleProps, draggableProps, innerRef }) => (
          <div
            className="container-task"
            ref={innerRef}
            {...draggableProps}
            {...dragHandleProps}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Task;
