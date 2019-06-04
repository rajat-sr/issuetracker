import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import classes from './IssueContainer.module.css';
import { Draggable } from 'react-beautiful-dnd';

class IssueContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Draggable draggableId={this.props.lifecycleid} index={this.props.issueid}>
        {({ dragHandleProps, draggableProps, innerRef }) => (
          <Card
            className={classes.IssueContainer}
            interactive={true}
            elevation={Elevation.TWO}
            innerRef={innerRef}
            {...dragHandleProps}
            {...draggableProps}
          >
            <p key={this.props._id}>{this.props.issue}</p>
          </Card>
        )}
      </Draggable>
    );
  }
}

export default IssueContainer;
