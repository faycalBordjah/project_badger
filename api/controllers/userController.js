const mongoose = require('mongoose');
User = mongoose.model('Users');

exports.list_all_users = function (req, res) {
  User.find({})
         .then(users => {
              if (!users) {
                  res.status(404);
                  return res.json({
                      status: "404",
                      message: "Could not find users."
                  });
              } else {
                res.status(200);
                return res.json({
                    status: "200",
                    message: "Users fetched successfully.",
                    users: users
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

exports.create_user = function (req, res) {
  var new_user = new User(req.body);
  User.findOne({nom:new_user.nom})
      .then(user => {
          if (!user) {
              new_user.save(function(err, user) {
                  if (err) {
                      res.status(400);
                      return res.json({
                        status: "400",
                        message: "Could not create user."
                      });
                  } else {
                      res.status(201);
                      return res.json({
                          status: "201",
                          message: "User created.",
                          user: user
                      });
                  }
              });
          } else {
              res.status(403);
              return res.json({
                  status: "403",
                  message: "User already exist.",
                  user: req.body
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

exports.get_user = function (req, res) {
  User.findOne({_id:req.params.id})
         .then(user => {
              if (!user) {
                  res.status(404);
                  return res.json({
                      status: "404",
                      message: "Could not find user."
                  });
              } else {
                res.status(200);
                return res.json({
                    status: "200",
                    message: "User fetched successfully.",
                    user: user
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

exports.update_user = function (req, res) {
  User.findOne({_id:req.params.id})
         .then(user => {
            if (!user) {
                res.status(404);
                return res.json({
                    status: "404",
                    message: "user not found.",
                    user: req.body
                });
            } else {
              User.updateOne(user, req.body, function(err, result) {
                  if (err) {
                      res.status(400);
                      return res.json({
                          status: "400",
                          message: "Could not update user.",
                          user: req.body,
                      });
                   } else {
                     res.status(200);
                     return res.json({
                         status: "200",
                         message: "User updated.",
                         userOld: user,
                         userNew: req.body
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

exports.delete_user = function (req, res) {
  User.findOne({_id:req.params.id})
         .then(user => {
            if (!user) {
                res.status(404);
                return res.json({
                    status: "404",
                    message: "User not found."
                });
            } else {
              User.deleteOne({_id:req.params.id}, function(err, result){
                  if (err) {
                      res.status(400);
                      return res.json({
                          status: "400",
                          message: "Could not delete user.",
                          userId: req.params.id
                      });
                   } else {
                     res.status(200);
                     return res.json({
                         status: "200",
                         message: "User deleted.",
                         userId: req.params.id
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
