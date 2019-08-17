
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {projectId: 1, description: 'rowValue1', notes: 'optional'},
      ]);
    });
};
