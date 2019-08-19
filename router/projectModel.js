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

async function add(projects){
    const [id] = await db('projects')
        .insert(projects);
    return findById(id);
}

async function addTask(task){
    const [id] = await db('tasks')
        .insert(task);
    return findTaskById(id);
}

async function addResource(resource){
    const [id] = await db('resources')
        .insert(resource);
    returnfindTaskById(id);
}

async function update(newUpdate,id){
    await db('projects')
        .where({id})
        .update(newUpdate);
    return findById(id);    
}

async function update(newUpdate,id){
    await db('tasks')
        .where({id})
        .update(newUpdate);
    return findTaskById(id);    
}

async function update(newUpdate,id){
    await db('resources')
        .where({id})
        .update(newUpdate);
    return findResourceById(id);    
}

function remove(id){
    return db('projects')
        .where({id})
        .del
}

function find() {
    return db('projects');
  }
  
  function findById(id) {
    return db('projects')
      .where({ id })
      .first();
  }
  
  function findTask(projectId) {
    return db('tasks as t')
      .join('projects as p', 'p.id', 't.projectId')
      .select(
        't.id',
        't.taskName as tasks',
        't.description',
        't.notes',
        't.completed',
        'p.id as projectId',
        'p.projectName as projects'
      )
      .where({ projectId });
  }
  
  function findResource(projectId) {
    return db('resources as r')
      .join('projects as p', 'p.id', 'r.projectId')
      .select(
        'r.id',
        'r.resourceName',
        'r.description',
        'p.id as projectId',
        'p.projectName as projects'
      )
      .where({ projectId });
  }
  
  function findTaskById(id) {
    return db('tasks')
      .where({ id })
      .first();
  }
  
  function findResourceById(id) {
    return db('resources')
      .where({ id })
      .first();
  }
  