var fs = require('fs');

var postsFilePath = "db/posts.json";

var getPosts = function() {
  var filePosts = fs.readFileSync(postsFilePath, "UTF-8");
  var posts = JSON.parse(filePosts);
  
  return posts;
}

module.exports = {
  getPosts: getPosts
}