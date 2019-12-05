module.exports = function (app) {
    const userController = require('../controllers/userController');

    app.route('/users')
        .post(userController.register)
        .get(userController.list_all_users);

    app.route('/login')
        .post(userController.login);

};
