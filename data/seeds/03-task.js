
exports.seed = function(knex) {
    return knex('tasks').insert([
        {
          projectId: 1, 
          taskName: 'newTask',
          description: 'rowValue1', 
          notes: 'optional',
          completed: 0 
        },
        {
          description: 'rowValue2',
          taskName: 'newTask',
          notes: 'optional',
          projectId: 2,
          completed: 0 
        },
      ]);
  };
