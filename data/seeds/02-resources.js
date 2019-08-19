
exports.seed = function(knex) {
    return knex('resource').insert([
        {
          projectId: 1, 
          resourceName: 'rowValue1', 
          description: 'optional'
        },
        {
          projectId: 2, 
          resourceName: 'rowValue2', 
          description: 'optional'}, 
        ]);   
};
