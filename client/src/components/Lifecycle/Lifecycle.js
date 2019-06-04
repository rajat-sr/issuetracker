import React from 'react';
import { Card, Elevation, Divider } from '@blueprintjs/core';
import IssueContainer from './../../containers/IssueContainer/IssueContainer';
import NewIssue from './../NewIssue/NewIssue';
import classes from './Lifecycle.module.css';

const issues = [
  { _id: 1, issue: 'abcd' },
  { _id: 2, issue: 'asvas' },
  { _id: 3, issue: 'abasfmjkas nvbiacd' },
  { _id: 4, issue: 'abasmkicou yvsagjbhcnapsjchuaisbc kjnpajihocuasjcd' },
  { _id: 5, issue: 'abasklicuhauvbcd' },
  { _id: 6, issue: 'asfmniuvbydandvfdgbhnjmkiyutyabcd' },
];


const Lifecycle = props => (
  <Card elevation={Elevation.TWO} className={classes.Lifecycle}>
    <h3>{props.name}</h3>
    <Divider />
    {issues ? (
      <div>
        {issues.map(issue => (
          <IssueContainer issue={issue.issue} key={issue._id} />
        ))}
        <Divider />
      </div>
    ) : null}
    <NewIssue />
  </Card>
);

export default Lifecycle;
