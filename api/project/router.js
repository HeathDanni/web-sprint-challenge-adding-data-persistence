// build your `/api/projects` router here
const express = require('express');
const Projects = require("./model");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.find()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const project = await Projects.findById(req.params.id)
        res.json(project)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
       const payload = {
           project_name: req.body.project_name,
           project_description: req.body.project_description,
           project_completed: req.body.project_completed
       }
       const [projectId] = await Projects.add(payload)
       const project = await Projects.findById(projectId)
       res.status(201).json(project)

    } catch(err) {
        next(err)
    }
})

module.exports = router