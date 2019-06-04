import React from 'react';
import { EditableText, Button } from '@blueprintjs/core';
import classes from './NewIssue.module.css';
import axios from 'axios';
import { SERVER_URL } from '../../config/config';

class NewIssue extends React.Component {
  state = {
    newissue: '',
  };

  addIssueHandler = (boardid, lifecycleid) => {
    const issue = {
      description: this.state.newissue,
      boardId: boardid,
      lifeCycleId: lifecycleid,
    };
    
    axios
      .post(`${SERVER_URL}/issues/`, issue)
      .then(res => {
        this.props.reRenderBoard();
        this.setState({ newissue: '' });
      })
      .catch(e => console.log('error creating new issue', e));
  };

  onChangeHandler = event => {
    this.setState({ newissue: event });
  };

  render() {
    return (
      <div className={classes.NewIssue}>
        <EditableText
          confirmOnEnter={false}
          placeholder="New Issue..."
          multiline={true}
          minLines={2}
          onChange={event => this.onChangeHandler(event)}
          value={this.state.newissue}
        />
        <Button
          text="Add issue"
          onClick={() => this.addIssueHandler(this.props.boardid, this.props.lifecycleid)}
        />
      </div>
    );
  }
}

export default NewIssue;
