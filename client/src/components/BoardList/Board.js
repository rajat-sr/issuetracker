import React from 'react';
import LifecycleImplemenation from './LifecycleImplemenation';
import { Button } from '@blueprintjs/core';

class Board extends React.Component {
  render() {
    return (
      <div className="container">
        Board Name:
        <input type="text" />
        <LifecycleImplemenation />
        <div className="board">
          <Button text="Create New Board" />
        </div>
      </div>
    );
  }
}

export default Board;
