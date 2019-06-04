import React from 'react';
import LifecycleImplemenation from './LifecycleImplemenation';
import { Button, Card } from '@blueprintjs/core';
import classes from './Board.module.css';

class Board extends React.Component {
  render() {
    return (
      <div>
        <Card className={classes.container}>
          <h3>Create a New Board</h3>
          Board Name
          <input type="text" />
          <LifecycleImplemenation />
          <Button text="Create New Board" />
        </Card>
        {this.props.boards ? (
          <Card>
            {this.props.boards.map(boardDetail => (<Button text={boardDetail.name} />))}
          </Card>
        ) : null}
      </div>
    );
  }
}

export default Board;
