import React from 'react';
import LifecycleImplemenation from './LifecycleImplemenation';
import { Button, Card } from '@blueprintjs/core';
import classes from './Board.module.css';
import { SERVER_URL } from '../../config/config';
import axios from 'axios';
import KanbanLayout from '../../containers/KanbanLayout/KanbanLayout';

class Board extends React.Component {
  state = {
    loadKanban: false,
    boards: null,
    kanban: null,
    boardName: '',
    lifecycle1: '',
    lifecycle2: '',
    lifecycle3: ''
  };
  componentDidMount() {
    axios
      .get(`${SERVER_URL}/boards`)
      .then(res => {
        this.setState({ boards: res.data });
      })
      .catch(e => console.log(e));
  }

  onBoardClickHandler = boardId => {
    axios
      .get(`${SERVER_URL}/boards/${boardId}/issues`)
      .then(res => {
        console.log(res.data);
        this.setState({ kanban: res.data, loadKanban: true });
        console.log(res.data);
      })
      .catch();
  };

  onChangeHandler = (event, whichLifecycle) => {
    let change;
    if (whichLifecycle === 0) {
      change = { lifecycle1: event.target.value };
    } else if (whichLifecycle === 1) {
      change = { lifecycle2: event.target.value };
    } else {
      change = { lifecycle3: event.target.value };
    }
    this.setState(change);
  };

  onNameChangeHandler = event => {
    this.setState({ boardName: event.target.value });
  };

  createBoardHandler = () => {
    axios
      .post(`${SERVER_URL}/boards`, {
        name: this.state.boardName,
        lifeCycles: [
          {
            name: this.state.lifecycle1,
            sequenceNumber: 0
          },
          {
            name: this.state.lifecycle2,
            sequenceNumber: 0
          },
          {
            name: this.state.lifecycle3,
            sequenceNumber: 0
          }
        ]
      })
      .then(res => {})
      .catch(e => console.log(e));
  };

  render() {
    const { loadKanban, kanban } = this.state;
    const layout = loadKanban ? (
      <KanbanLayout lifecycles={kanban.lifeCycles} />
    ) : (
      <div>
        <Card className={classes.container}>
          <h3>Create a New Board</h3>
          Board Name
          <input
            type="text"
            onChange={event => this.onNameChangeHandler(event)}
          />
          {/* <LifecycleImplemenation /> */}
          Lifecycles
          <input
            type="text"
            placeholder="Lifecycle 1 Name"
            onChange={event => this.onChangeHandler(event, 0)}
          />
          <input
            type="text"
            placeholder="Lifecycle 2 Name"
            onChange={event => this.onChangeHandler(event, 1)}
          />
          <input
            type="text"
            placeholder="Lifecycle 3 Name"
            onChange={event => this.onChangeHandler(event, 2)}
          />
          <Button
            text="Create New Board"
            onClick={() => this.createBoardHandler()}
          />
        </Card>
        {this.state.boards ? (
          <Card className={classes.BoardList}>
            <h3>Your boards</h3>
            {this.state.boards.map(boardDetail => (
              <Button
                className={classes.BoardButton}
                text={boardDetail.name}
                key={boardDetail._id}
                onClick={() => this.onBoardClickHandler(boardDetail._id)}
              />
            ))}
          </Card>
        ) : null}
      </div>
    );
    return <div>{layout}</div>;
  }
}

export default Board;
