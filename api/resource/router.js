// build your `/api/projects` router here
const express = require('express');
const Resources = require("./model");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.find()
        res.json(resources)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const resource = await Resources.findById(req.params.id)
        res.json(resource)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
       const payload = {
           resource_name: req.body.resource_name,
           resource_description: req.body.resource_description,
       }
       const [resourceId] = await Resources.add(payload)
       const resources = await Resources.findById(resourceId)
       res.status(201).json(resources)

    } catch(err) {
        next(err)
    }
})

module.exports = router