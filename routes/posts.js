var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');

/* GET posts page. */
router.get('/', function (req, res, next) {
    var posts = postsService.getPosts();

    res.render('posts/posts', { title: 'Blog', posts: posts });
});

/* GET postId page. */
router.get('/:postId', function (req, res, next) {
    var postId = req.params.postId;
    var posts = postsService.getPosts();
    var post = posts.filter((post) => post.id == postId)[0];

    res.render('posts/post', { title: post.title, post: post });
});

module.exports = router;
