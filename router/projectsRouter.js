const express = require('express');
const router = express.Router();
const projectsModel = require('./projectModel');

router.get('/', async (req,res) => {
    try{
        const project = await projectsModel.find();
        res.json(project);
    }
    catch(err){
        res.status(500).json({message: 'Unable to retrieve the projects'});
    }
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;

    try{
        const project = await projectsModel.findById(id);

        if(project){
            res.json(project);
        }
        else{
            res.status(404).json({message: 'Unable to find project by id'});
        }
    }
    catch(err){
        res.status(500).json({message: 'Unable to get project'});
    }
});

router.get('/:id/task', async (req,res) => {
    const {id} = req.params;

    try{
       const task = await projectsModel.findTask(id);

    if(task){
        res.json(task);
    }
    else{
        res.status(404).json({message: 'Unable to find task'})
    }
}   
    catch (err){
        res.status(500).json({message: 'Unable to get task'})
    }      
});

router.get('/:id/resource', async (req, res) => {
    const { id } = req.params;
  
    try {
      const resource = await projectsModel.findResource(id);
  
      if (resources.length) {
        res.json(resources);
      } else {
        res
          .status(404)
          .json({ message: 'Unable to find resources for given ID' });
      }
    } catch (err) {
      res.status(500).json({ err: err.message, message: 'Unable to get task' });
    }
  });
  
  router.post('/', async (req, res) => {
    const projectInfo = req.body;
  
    try {
      const project = await projectsModel.add(projectInfo);
      res.status(201).json(project);
    } catch (err) {
      res
        .status(500)
        .json({ err: err.message, message: 'Unable to create a new project' });
    }
  });
  
  router.post('/:id/task', async (req, res) => {
    const taskInfo = req.body;
    const { id } = req.params;
  
    try {
      const project = await projectsModel.findById(id);
  
      if (project) {
        const task = await projectsModel.addTask(taskInfo, id);
        res.status(201).json(task);
      } else {
        res
          .status(404)
          .json({ message: 'Unable to find project with given id.' });
      }
    } catch (err) {
      res
        .status(500)
        .json({ err: err.message, message: 'Unable to create a new task' });
    }
  });
  
  router.post('/:id/resources', async (req, res) => {
    const resourceData = req.body;
    const { id } = req.params;
  
    try {
      const project = await projectsModel.findById(id);
  
      if (project) {
        const resource = await projectsModel.addResource(resourceData, id);
        res.status(201).json(resource);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with given id.' });
      }
    } catch (err) {
      res
        .status(500)
        .json({ err: err.message, message: 'Failed to create new resource.' });
    }
  });
  
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    try {
      const project = await projectsModel.findById(id);
  
      if (project) {
        const updatedProject = await projectsModel.update(changes, id);
        res.json(updatedProject);
      } 
      else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    } 
    catch (err) {
      res
        .status(500)
        .json({ err: err.message, message: 'Failed to update project' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleted = await projectsModel.remove(id);
  
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to delete project' });
    }
  });
  
  module.exports = router;
