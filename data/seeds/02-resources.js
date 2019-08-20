
exports.seed = function(knex) {
    return knex('resources').insert([
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
