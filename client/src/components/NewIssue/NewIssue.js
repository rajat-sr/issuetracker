import React from 'react';
import { EditableText, Button } from '@blueprintjs/core';
import classes from './NewIssue.module.css';

const NewIssue = () => {
  return (
    <div className={classes.NewIssue}>
      <EditableText
        confirmOnEnter={false}
        placeholder="New Issue..."
        multiline={true}
        minLines={2}
      />
      <Button text="Add issue" />
    </div>
  );
};

export default NewIssue;
