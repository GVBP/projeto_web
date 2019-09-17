var express = require('express');
var router = express.Router();
var jobsService = require('../services/jobsService');

/* GET jobs page. */
router.get('/', function (req, res, next) {
    var jobs = jobsService.getJobs();

    res.render('jobs/jobs', { title: 'Blog - Jobs', jobs: jobs });
});

module.exports = router;
