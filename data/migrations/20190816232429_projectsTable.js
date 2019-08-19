
exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
        tbl.increments();
        tbl.integer('resourceId')
            .unsigned()
            .references('id')
            .inTable('resource')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('projectName', 128)
            .notNullable()
            .unique();
        tbl.string('description', 128);
        tbl.boolean('completed').notNullable();
    })
        .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('resourceName', 128)
            .notNullable()
            .unique();
        tbl.string('description',128)  
        tbl.integer('projectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
       
         
    })
    .createTable('task', tbl => {
        tbl.increments();
        tbl.string('taskName')
            .notNullable()
            .unique()
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
        tbl.boolean('completed').notNullable();
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
};
