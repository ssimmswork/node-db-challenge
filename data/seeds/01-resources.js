
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
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
    });
};
