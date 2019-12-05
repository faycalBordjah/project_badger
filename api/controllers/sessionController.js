const mongoose = require('mongoose');
Session = mongoose.model('Sessions');

exports.list_all_sessions = function (req, res) {
  Session.find({})
         .then(sessions => {
              if (!sessions) {
                  res.status(404);
                  return res.json({
                      status: "404",
                      message: "Could not find sessions."
                  });
              } else {
                res.status(200);
                return res.json({
                    status: "200",
                    message: "Sessions fetched successfully.",
                    sessions: sessions
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

exports.create_session = function (req, res) {
  var new_session = new Session(req.body);
  Session.findOne({nom:new_session.nom})
      .then(session => {
          if (!session) {
              new_session.save(function(err, session) {
                  if (err) {
                      res.status(400);
                      return res.json({
                        status: "400",
                        message: "Could not create session."
                      });
                  } else {
                      res.status(201);
                      return res.json({
                          status: "201",
                          message: "Session created.",
                          session: session
                      });
                  }
              });
          } else {
              res.status(403);
              return res.json({
                  status: "403",
                  message: "Session already exist.",
                  session: req.body
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

exports.get_session = function (req, res) {
  Session.findOne({_id:req.params.id})
         .then(session => {
              if (!session) {
                  res.status(404);
                  return res.json({
                      status: "404",
                      message: "Could not find session."
                  });
              } else {
                res.status(200);
                return res.json({
                    status: "200",
                    message: "Session fetched successfully.",
                    session: session
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

exports.update_session = function (req, res) {
  Session.findOne({_id:req.params.id})
         .then(session => {
            if (!session) {
                res.status(404);
                return res.json({
                    status: "404",
                    message: "Session not found.",
                    session: req.body
                });
            } else {
              Session.updateOne(session, req.body, function(err, result) {
                  if (err) {
                      res.status(400);
                      return res.json({
                          status: "400",
                          message: "Could not update session.",
                          session: req.body,
                      });
                   } else {
                     res.status(200);
                     return res.json({
                         status: "200",
                         message: "Session updated.",
                         sessionOld: session,
                         sessionNew: req.body
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

exports.delete_session = function (req, res) {
  Session.findOne({_id:req.params.id})
         .then(session => {
            if (!session) {
                res.status(404);
                return res.json({
                    status: "404",
                    message: "Session not found."
                });
            } else {
              Session.deleteOne({_id:req.params.id}, function(err, result){
                  if (err) {
                      res.status(400);
                      return res.json({
                          status: "400",
                          message: "Could not delete session.",
                          sessionId: req.params.id
                      });
                   } else {
                     res.status(200);
                     return res.json({
                         status: "200",
                         message: "Session deleted.",
                         sessionId: req.params.id
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
