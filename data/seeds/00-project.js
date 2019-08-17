
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {resourceId: 1, name: 'john', description: 'first entry'},      ]);
    });
};
