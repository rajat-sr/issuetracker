import React from 'react';
import { Card, Elevation, Divider } from '@blueprintjs/core';
import IssueContainer from './../../containers/IssueContainer/IssueContainer';
import NewIssue from './../NewIssue/NewIssue';
import classes from './Lifecycle.module.css';
import { Droppable } from 'react-beautiful-dnd';

class Lifecycle extends React.Component {
  render() {
    const lifecycleid = this.props._id;
    return (
      <Card elevation={Elevation.TWO} className={classes.Lifecycle}>
        <h3>{this.props.name}</h3>
        <Divider />
        {this.props.issues && this.props.issues.length > 0 ? (
          <Droppable droppableId={this.props._id}>
            {({ innerRef, droppableProps, placeholder }) => (
              <div innerRef={innerRef} {...droppableProps}>
                {this.props.issues.map(issue => (
                  <IssueContainer issue={issue.description} key={issue._id} lifecycleid={lifecycleid} issueid={issue._id}/>
                ))}
                <Divider />
                {placeholder}
              </div>
            )}
          </Droppable>
        ) : null}
        <NewIssue />
      </Card>
    );
  }
}

export default Lifecycle;
