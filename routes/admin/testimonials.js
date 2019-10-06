var express = require('express');
var router = express.Router();
var testimonialsService = require('../../services/testimonialsService');

router.get('/', function (req, res, next) {
    var testimonials = testimonialsService.getTestimonials();

    var data = {
        title: "Administração dos Depoimentos",
        testimonials: testimonials
    };

    res.render('admin/testimonials/index', data);
});

router.get('/create', function (req, res, next) {

    var data = {
        title: "Novo Depoimento"
    };

    res.render('admin/testimonials/create', data);
});

router.post('/create', function (req, res, next) {
    var testimonials = testimonialsService.getTestimonials();

    var newId = testimonials.length + 1;

    var newTestimony = {};
    newTestimony.id = newId;
    newTestimony.name = req.body.name;
    newTestimony.company = req.body.company;
    newTestimony.title = req.body.title;
    newTestimony.testimony = req.body.testimony;

    testimonialsService.saveTestimony(newTestimony);

    res.redirect('/admin/testimonials');
});

module.exports = router;
