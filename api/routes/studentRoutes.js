module.exports = function (app) {
    const student = require('../controllers/studentController');
    const auth = require('../../middleware/auth');

    app.route('/students')
        .all(auth.validateToken)
        .get(student.list_all_students)
        .post(student.create_student);

    app.route('/students/:id')
        .all(auth.validateToken)
        .get(student.get_student)
        .put(student.update_student)
        .delete(student.delete_student);
};
