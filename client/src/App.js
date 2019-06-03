import React from 'react';
import KanbanLayout from './containers/KanbanLayout/KanbanLayout';
import NavbarLayout from './containers/Navbar/Navbar';

const lifecycles = ['LC1', 'LC2', 'LC3'];
const boardName = "Batmobile"

function App() {
  return (
    <div className="App">
      <NavbarLayout boardName={boardName}/>
      <KanbanLayout lifecycles={lifecycles} />
    </div>
  );
}

export default App;
