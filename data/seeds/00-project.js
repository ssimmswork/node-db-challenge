
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          resourceId: 1, 
          projectName: 'johns project', 
          description: 'first entry'}
          ,
        {
          resourceId: 1, 
          projectName: 'sues project', 
          description: 'second entry'
        }
            ]);    
      });
};
