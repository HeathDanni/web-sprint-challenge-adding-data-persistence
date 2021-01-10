// build your `/api/projects` router here
const express = require('express');
const projects = require("../model");

const router = express.Router();

router.get('/projects', async (req, res, next) => {
    try {
        const projects = await projects.find()
        res.json(animals)
    } catch(err) {
        next(err)
    }
}) 


router.get("/projects/:id", async (req, res, next) => {
    try {
        
    }
})