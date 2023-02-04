const users = require("./users/users.service.js");
const posts = require("./posts/posts.service.js");
const articles = require("./articles/articles.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(posts);
  app.configure(articles);
  // ~cb-add-configure-service-name~
};
