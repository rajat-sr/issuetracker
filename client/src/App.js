import React from 'react';
import KanbanLayout from './containers/KanbanLayout/KanbanLayout';
import Board from './components/BoardList/Board';
import NavbarLayout from './containers/Navbar/Navbar';

const lifecycles = ['LC1', 'LC2', 'LC3'];

function App() {
  return (
    <div className="App">
      <NavbarLayout 
      // boardName={boardName}
      />
      {/* <KanbanLayout lifecycles={lifecycles} /> */}
      <Board />
    </div>
  );
}

export default App;
