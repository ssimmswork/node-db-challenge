
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.integer('resourceId')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('name', 128)
            .notNullable();
        tbl.string('description', 128);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.integer('projectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('name', 128)
            .notNullable()
        tbl.string('description',128)    
    })
    .createTable('task', tbl => {
        tbl.increments();
        tbl.integer('ProjectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('description', 128)
            .notNullable;
        tbl.string('notes',128)    
    })
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
