import React from 'react';
import { Card, Elevation, Divider } from '@blueprintjs/core';
import IssueContainer from './../../containers/IssueContainer/IssueContainer';
import NewIssue from './../NewIssue/NewIssue';
import classes from './Lifecycle.module.css';

const Lifecycle = props => (
  <Card elevation={Elevation.ONE} className={classes.Lifecycle}>
    <h3>{props.name}</h3>
    <Divider />
    {props.issues
      ? props.issues.map(issue => <IssueContainer issue={issue} key={issue._id} />)
      : null}
    <NewIssue />
  </Card>
);

export default Lifecycle;
