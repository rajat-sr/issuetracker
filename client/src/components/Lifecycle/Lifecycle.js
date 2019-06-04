import React from 'react';
import { Card, Elevation, Divider } from '@blueprintjs/core';
import IssueContainer from './../../containers/IssueContainer/IssueContainer';
import NewIssue from './../NewIssue/NewIssue';
import classes from './Lifecycle.module.css';

const Lifecycle = props => (
  <Card elevation={Elevation.TWO} className={classes.Lifecycle}>
    <h3>{props.name}</h3>
    <Divider />
    {props.issues && props.issues.length > 0 ? (
      <div>
        {props.issues.map(issue => (
          <IssueContainer issue={issue.description} key={issue._id} />
        ))}
        <Divider />
      </div>
    ) : null}
    <NewIssue />
  </Card>
);

export default Lifecycle;
