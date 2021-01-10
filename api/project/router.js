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

module.exports = router