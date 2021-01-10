// build your `/api/tasks` router here
const express = require('express');
const Tasks = require("./model");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.find()
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const task = await Tasks.findById(req.params.id)
        res.json(task)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
       const payload = {
           task_description: req.body.task_description,
           task_completed: req.body.task_completed,
           project_id: req.body.project_id,
           task_notes: req.body.task_notes
       }
       const [taskId] = await Tasks.add(payload)
       const task = await Tasks.findById(taskId)
       res.status(201).json(task)

    } catch(err) {
        next(err)
    }
})

module.exports = router