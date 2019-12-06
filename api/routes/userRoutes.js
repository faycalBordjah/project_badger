module.exports = function (app) {
    const userController = require('../controllers/userController');
    const auth = require('../../middleware/auth');

    app.route('/users')
    .all(auth.validateToken)
    .get(userController.list_all_users);

    app.route('/register')
        .post(userController.register);

    app.route('/users/:id')
    .all(auth.validateToken)
    .get(userController.get_user)
    .put(userController.update_user)
    .delete(userController.delete_user);

    app.route('/login')
        .post(userController.login);

};

