import React from 'react';
import Board from './components/BoardList/Board';
import NavbarLayout from './containers/Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarLayout
        />
        <Board />
      </div>
    );
  }
}

export default App;
