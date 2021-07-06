import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './Column.css';
class Column extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-column">
        <div className="title">{this.props.column.title}</div>
        <Droppable droppableId={this.props.column.id}>
          {({ innerRef, droppableProps, placeholder }) => (
            <div className="Tasklist" ref={innerRef} {...droppableProps}>
              {this.props.task.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Column;
