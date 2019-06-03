import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import classes from './IssueContainer.module.css'

const IssueContainer = props => {
  return (
    <Card className={classes.IssueContainer} elevation={Elevation.TWO}>
      <p key={props._id}>{props.issue}</p>
    </Card>
  );
};

export default IssueContainer;
