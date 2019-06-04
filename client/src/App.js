import React from 'react';
import Board from './components/BoardList/Board';
import NavbarLayout from './containers/Navbar/Navbar';

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
