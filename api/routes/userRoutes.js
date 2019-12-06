module.exports = function (app) {
    const userController = require('../controllers/userController');

    app.route('/users')
        .post(userController.register)
        .get(userController.list_all_users);


    app.route('/users/:id')
    .get(userController.get_user)
    .put(userController.update_user)
    .delete(userController.delete_user);

    app.route('/login')
        .post(userController.login);

};

