import React from 'react';
import Lifecycle from '../../components/Lifecycle/Lifecycle';
import classes from './LifecyclesContainer.module.css';
import { DragDropContext } from 'react-beautiful-dnd';

class LifecyclesContainer extends React.Component {
  render() {
    return (
      <DragDropContext onDragEnd={() => this.onDragEndHandler()}>
      <div className={classes.Lifecycles}>
        {this.props.lifecycles
          ? this.props.lifecycles.map(lifecycle => (
              <Lifecycle name={lifecycle.name} key={lifecycle._id} issues={lifecycle.issues} _id={lifecycle._id} />
            ))
          : null}
      </div>
      </DragDropContext>
    );
  }
}

export default LifecyclesContainer;
