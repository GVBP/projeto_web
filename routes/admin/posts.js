var express = require('express');
var router = express.Router();
var postsService = require('../../services/postsService');

router.get('/', function(req, res, next) {
    var posts = postsService.getPosts();
    
    var data = {
        title: "Administração dos Posts",
        posts: posts
    };
    
    res.render('admin/posts/index', data);
});

module.exports = router;
