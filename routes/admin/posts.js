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

router.get('/create', function(req, res, next) {

    var data = {
        title: "Novo Post"//,
        //posts: posts
    };

    res.render('admin/posts/create', data);
});

router.post('/create', function(req, res, next) {
    var posts = postsService.getPosts();

    var newId = posts.length + 1;

    var newPost = {};
    newPost.id = newId;
    newPost.title = req.body.title;
    newPost.image = req.body.image;
    newPost.description = req.body.description;
    newPost.body = req.body.postBody;

    postsService.savePost(newPost);
    
    res.redirect('/admin/posts');
});

module.exports = router;
