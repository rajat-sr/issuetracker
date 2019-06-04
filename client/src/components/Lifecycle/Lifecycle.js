import React from 'react';
import { Card, Elevation, Divider } from '@blueprintjs/core';
import IssueContainer from './../../containers/IssueContainer/IssueContainer';
import NewIssue from './../NewIssue/NewIssue';
import classes from './Lifecycle.module.css';

<<<<<<< HEAD
const issues = [
  { _id: 1, issue: 'abcd' },
  { _id: 2, issue: 'asvas' },
  { _id: 3, issue: 'abasfmjkas nvbiacd' },
  { _id: 4, issue: 'abasmkicou yvsagjbhcnapsjchuaisbc kjnpajihocuasjcd' },
  { _id: 5, issue: 'abasklicuhauvbcd' },
  { _id: 6, issue: 'asfmniuvbydandvfdgbhnjmkiyutyabcd' },
];


=======
>>>>>>> 85a8e19120938a16984741bba8ab0c4fd8e78dc6
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
