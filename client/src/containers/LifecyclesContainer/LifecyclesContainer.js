import React from 'react';
import Lifecycle from '../../components/Lifecycle/Lifecycle';
import classes from './LifecyclesContainer.module.css';

const LifecyclesContainer = props => (
  <div className={classes.Lifecycles}>
    {props.lifecycles
      ? props.lifecycles.map(lifecycle => (
          <Lifecycle
            name={lifecycle.name}
            key={lifecycle._id}
            issues={lifecycle.issues}
            lifecycleid={lifecycle._id}
            boardid={props.boardid}
            reRenderBoard={() => props.reRenderBoard()}
          />
        ))
      : null}
  </div>
);

export default LifecyclesContainer;
