var express = require('express');
var router = express.Router();
var projectsService = require('../services/projectsService');

/* GET projects page. */
router.get('/', function (req, res, next) {
    var projects = projectsService.getProjects();

    res.render('projects/projects', { title: 'Blog', projects: projects });
});

/* GET projectId page. */
router.get('/:projectId', function (req, res, next) {
    var projectId = req.params.projectId;
    var projects = projectsService.getProjects();
    var project = projects.filter((project) => project.id == projectId)[0];

    res.render('projects/project', { name: project.name, project: project });
});

module.exports = router;
