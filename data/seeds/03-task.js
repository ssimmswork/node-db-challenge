
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
          projectId: 2, 
          taskName: 'newTask2',
          description: 'rowValue2', 
          notes: 'optional',
          completed: 0 

          
        },
      ]);
  };
