module.exports = function(app){
    const student = require('../controllers/studentController');
  
    app.route('/students')
    .get(student.list_all_students)
    .post(student.create_student);
  
    app.route('/students/:id')
    .get(student.get_student)
    .put(student.update_student)
    .delete(student.delete_student);
  }