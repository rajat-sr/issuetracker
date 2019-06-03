import React from 'react';
import Lifecycle from './Lifecycle';

class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputs: ['input-0'] };
  }

  render() {
    return (
      <div>
        <form>
          <div id="dynamicInput">
            {this.state.inputs.map(input => (
              <Lifecycle key={input} />
            ))}
          </div>
        </form>
        <button onClick={() => this.appendInput()}>+</button>
      </div>
    );
  }

  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({
      inputs: prevState.inputs.concat([newInput])
    }));
  }
}

export default Kanban;
