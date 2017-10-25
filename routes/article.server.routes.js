module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/articles/new')
	.get(articles.new);


  app.route('/articles/all')
	.get(articles.all);
  
	app.route('/articles/:articleId')
	.get(articles.view);

	app.route('/articles/edit/articleId')
	.get(articles.edit);


	app.route('api/articles')
	.get(articles.list)
	.post(users.requestLogin,articles.create);
	
//	app.route('api/articles/:articleID')
//	.get(articles.read)
//	.delete(users.requestLogin,articles.delete);
	

}
