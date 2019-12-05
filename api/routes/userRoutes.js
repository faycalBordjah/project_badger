module.exports = function (app) {
    const userController = require('../controllers/userController');

    app.route('/users')
        .get(userController.list_all_users);

    app.route('/login')
        .post(userController.login);

    app.route('/register')
        .post(userController.register)

};
