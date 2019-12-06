const mongoose = require('mongoose');
Student = mongoose.model('Students');

exports.list_all_students = function (req, res) {
  Student.find({})
         .then(students => {
              if (!students) {
                  res.status(404);
                  return res.json({
                      status: "404",
                      message: "Could not find students."
                  });
              } else {
                res.status(200);
                return res.json({
                    status: "200",
                    message: "Students fetched successfully.",
                    students: students
                });
              }
         })
         .catch(err => {
              res.status(500);
              return res.json({
                  status: "500",
                  message: "Something went wrong."
              });
         });
}

exports.create_student = function (req, res) {
  var new_student = new Student(req.body);
  Student.findOne({nom:new_student.nom})
      .then(student => {
          if (!student) {
              new_student.save(function(err, student) {
                  if (err) {
                      res.status(400);
                      return res.json({
                        status: "400",
                        message: "Could not create student."
                      });
                  } else {
                      res.status(201);
                      return res.json({
                          status: "201",
                          message: "Student created.",
                          student: student
                      });
                  }
              });
          } else {
              res.status(403);
              return res.json({
                  status: "403",
                  message: "Student already exist.",
                  student: req.body
              });
          }
      })
      .catch(err => {
          res.status(500);
          return res.json({
              status: "500",
              message: "Something went wrong."
          });
      });
}

exports.get_student = function (req, res) {
  Student.findOne({_id:req.params.id})
         .then(student => {
              if (!student) {
                  res.status(404);
                  return res.json({
                      status: "404",
                      message: "Could not find student."
                  });
              } else {
                res.status(200);
                return res.json({
                    status: "200",
                    message: "Student fetched successfully.",
                    student: student
                });
              }
         })
         .catch(err => {
              res.status(500);
              return res.json({
                  status: "500",
                  message: "Something went wrong."
              });
         });
}

exports.update_student = function (req, res) {
  Student.findOne({_id:req.params.id})
         .then(student => {
            if (!student) {
                res.status(404);
                return res.json({
                    status: "404",
                    message: "Student not found.",
                    student: req.body
                });
            } else {
              Student.updateOne(student, req.body, function(err, result) {
                  if (err) {
                      res.status(400);
                      return res.json({
                          status: "400",
                          message: "Could not update student.",
                          student: req.body,
                      });
                   } else {
                     res.status(200);
                     return res.json({
                         status: "200",
                         message: "Student updated.",
                         studentOld: student,
                         studentNew: req.body
                     });
                   }
              });
            }
         })
         .catch(err => {
            res.status(500);
            return res.json({
                status: "500",
                message: "Something went wrong."
            });
         });
}

exports.delete_student = function (req, res) {
  Student.findOne({_id:req.params.id})
         .then(student => {
            if (!student) {
                res.status(404);
                return res.json({
                    status: "404",
                    message: "student not found."
                });
            } else {
              Student.deleteOne({_id:req.params.id}, function(err, result){
                  if (err) {
                      res.status(400);
                      return res.json({
                          status: "400",
                          message: "Could not delete student.",
                          studentId: req.params.id
                      });
                   } else {
                     res.status(200);
                     return res.json({
                         status: "200",
                         message: "Student deleted.",
                         studentId: req.params.id
                     });
                   }
              });
            }
         })
         .catch(err => {
            res.status(500);
            return res.json({
                status: "500",
                message: "Something went wrong."
            });
         });
}