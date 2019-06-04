const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'jkaaklncaskl' },
    'task-2': { id: 'task-2', content: 'jkacbwioh' },
    'task-3': { id: 'task-3', content: 'pediooidj' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'LC-1',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    'column-2': {
      id: 'column-2',
      title: 'LC-2',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'LC-3',
      taskIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;
