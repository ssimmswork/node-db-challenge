const db = require('../data/db-config');

module.exports = {
    add,
    addTask,
    addResource,
    update,
    remove,
    find,
    findResource,
    findResourceById,
    findById,
    findTask, 
};

async function add(project){
    const [id] = await db('project')
        .insert(project);
    return findById(id);
}

async function addTask(task){
    const [id] = await db('task')
        .insert(task);
    return findTaskById(id);
}

async function addResource(resource){
    const [id] = await db('resource')
        .insert(resource);
    returnfindTaskById(id);
}

async function update(newUpdate,id){
    await db('project')
        .where({id})
        .update(newUpdate);
    return findById(id);    
}

async function update(newUpdate,id){
    await db('task')
        .where({id})
        .update(newUpdate);
    return findTaskById(id);    
}

async function update(newUpdate,id){
    await db('resource')
        .where({id})
        .update(newUpdate);
    return findResourceById(id);    
}

function remove(id){
    return db('project')
        .where({id})
        .del
}

function find() {
    
    return db('project');
  }
  
  function findById(id) {
    return db('project')
      .where({ id })
      .first();
  }
  
  function findTask(project_id) {
    return db('task as t')
      .join('project as p', 'p.id', 't.projectId')
      .select(
        't.id',
        't.taskName as task',
        't.description',
        't.notes',
        't.completed',
        'p.id as projectId',
        'p.projectName as project'
      )
      .where({ projectId });
  }
  
  function findResource(projectId) {
    return db('resource as r')
      .join('project as p', 'p.id', 'r.projectId')
      .select(
        'r.id',
        'r.resourceName',
        'r.description',
        'p.id as projectId',
        'p.projectName as project'
      )
      .where({ projectId });
  }
  
  function findTaskById(id) {
    return db('task')
      .where({ id })
      .first();
  }
  
  function findResourceById(id) {
    return db('resource')
      .where({ id })
      .first();
  }
  