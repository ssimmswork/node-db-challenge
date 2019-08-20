
exports.seed = function(knex) {
  
      return knex('projects').insert([
        {
          projectName: 'johns project', 
          description: 'first entry',
          completed: 0 
        }
          ,
        {
          projectName: 'sues project', 
          description: 'second entry',
          completed: 0 
        }
            ]);    
    };
