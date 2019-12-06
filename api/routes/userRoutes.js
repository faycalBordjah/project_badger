module.exports = function (app) {
    const userController = require('../controllers/userController');

    app.route('/users')
        .post(userController.register)
        .get(userController.list_all_users);


    app.route('/users/:id')
    .get(user.get_user)
    .put(user.update_user)
    .delete(user.delete_user);

    app.route('/login')
        .post(userController.login);

};

