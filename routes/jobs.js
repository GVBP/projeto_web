var express = require('express');
var router = express.Router();
var jobsService = require('../services/jobsService');

/* GET jobs page. */
router.get('/', function (req, res, next) {
    var jobs = jobsService.getJobs();

    res.render('jobs/jobs', { title: 'Blog - Jobs', jobs: jobs });
});

/* GET jobId page. */
router.get('/:jobId', function (req, res, next) {
    var jobId = req.params.jobId;
    var jobs = jobsService.getJobs();
    var job = jobs.filter((job) => job.id == jobId)[0];

    res.render('jobs/job', { title: job.name, job: job });
});

module.exports = router;
