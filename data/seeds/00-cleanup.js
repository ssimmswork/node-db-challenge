const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  try {
    
    await knex.truncate('task');
    await knex.truncate('resource');
    await knex.truncate('project');
  } catch (err) {
    console.log(err);
  }
};