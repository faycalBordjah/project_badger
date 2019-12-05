module.exports = function (app) {
    const userController = require('../controllers/userController');
    const auth = require('../middleware/auth');

    app.route('/users')
        .get(userController.list_all_users);

    app.route('/login')
        .post(userController.login);

    app.route('/register')
        .post(userController.register)

};
