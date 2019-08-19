
exports.seed = function(knex) {
  
      return knex('project').insert([
        {
          resourceId: 1, 
          projectName: 'johns project', 
          description: 'first entry',
          completed: 0 
        }
          ,
        {
          resourceId: 1, 
          projectName: 'sues project', 
          description: 'second entry',
          completed: 0 
        }
            ]);    
    };
