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
        this.setState({ kanban: res.data, loadKanban: true });
        console.log(res.data)
      })
      .catch();
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
          <input type="text" />
          <LifecycleImplemenation />
          <Button text="Create New Board" />
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
