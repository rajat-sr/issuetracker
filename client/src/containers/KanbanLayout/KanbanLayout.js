import React from 'react';
import LifecyclesContainer from '../LifecyclesContainer/LifecyclesContainer';

const KanbanLayout = props => <LifecyclesContainer {...props} reRenderBoard={() => props.reRenderBoard()} />;

export default KanbanLayout;
