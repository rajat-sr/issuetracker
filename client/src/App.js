import React from 'react';
import KanbanLayout from './containers/KanbanLayout/KanbanLayout';

const lifecycles = ['LC1', 'LC2', 'LC3'];

function App() {
  return (
    <div className="App">
      <KanbanLayout lifecycles={lifecycles} />
    </div>
  );
}

export default App;
