module.exports = function(app){
  const user = require('../controllers/userController');

  app.route('/users')
  .get(user.list_all_users)
  .post(user.create_user);

  // app.route('/users/:id')
  // .get(user.get_user)
  // .put(user.update_user)
  // .delete(user.delete_user);
}
