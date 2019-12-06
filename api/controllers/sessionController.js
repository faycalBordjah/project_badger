// Get "mongoose" library
const mongoose = require('mongoose');
// Get "mongoose" library model named "Sessions"
Session = mongoose.model('Sessions');

// GET Request : get all sessions
exports.list_all_sessions = function (req, res) {
  // find all sessions
    Session.find({})
           .then(sessions => {
               // if the request succeded
               if (sessions && sessions.length === 0) {
                    // if nothing was found
                    res.status(204).send();
                    // else if something was found
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
               // if the request failed
               res.status(500);
               return res.json({
                   status: "500",
                   message: "Something went wrong."
               });
           });
}

// POST Request : create a session
exports.create_session = function (req, res) {
    // create a brand new model with request information
    var new_session = new Session(req.body);
    // find one session by 'nom'
    Session.findOne({nom:new_session.nom})
           .then(session => {
                // if the request succeded
                if (!session) {
                    // if nothing was found
                    // save the new session
                    new_session.save(function(err, session) {
                        if (err) {
                        // if the save encounter errors
                            res.status(400);
                            return res.json({
                                status: "400",
                                message: "Could not create session. Check if session's name/year are well informed."
                            });
                        } else {
                        // if the save succeded
                            res.status(201);
                            return res.json({
                                status: "201",
                                message: "Session created.",
                                session: session
                            });
                        }
                    });
                } else {
                    // if session was found
                    res.status(403);
                    return res.json({
                        status: "403",
                        message: "Session already exist.",
                        session: req.body
                    });
                }
           })
           .catch(err => {
                // if the request failed
                res.status(500);
                return res.json({
                    status: "500",
                    message: "Something went wrong."
                });
           });
}

// GET Request : get a session
exports.get_session = function (req, res) {
    // find one session by '_id' thanks to the 'id' param
    Session.findOne({_id:req.params.id})
           .then(session => {
                // if the request succeded
                if (!session) {
                    // if nothing was found
                    res.status(404);
                    return res.json({
                        status: "404",
                        message: "No session found."
                    });
                } else {
                    // if session was found
                    res.status(200);
                    return res.json({
                        status: "200",
                        message: "Session fetched successfully.",
                        session: session
                    });
                }
           })
           .catch(err => {
               // if nothing was found
                res.status(404);
                return res.json({
                    status: "404",
                    message: "Could not find session."
                });
           });
}

// PUT Request : update session if this one was found
// create it, if it doesn't exist
exports.update_session = function (req, res) {
    // find one session by '_id' thanks to the 'id' param
    Session.findOne({_id:req.params.id})
           .then(session => {
                // if the request succeded
                if (!session) {
                    // if nothing was found
                    res.status(404);
                    return res.json({
                        status: "404",
                        message: "Session not found.",
                        session: req.body
                    });
                } else {
                    // if session was found, update this one
                    Session.updateOne(session, req.body, function(err, result) {
                        if (err) {
                            // if the update encounter errors
                            res.status(400);
                            return res.json({
                                status: "400",
                                message: "Could not update session.",
                                session: req.body,
                            });
                        } else {
                            // if the update succeded
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
                // if request failed
                res.status(404);
                return res.json({
                    status: "404",
                    message: "Session not found.",
                    session: req.body
                });
           });
}

// DELETE Request : delete session if this one was found
exports.delete_session = function (req, res) {
    // find one session by '_id' thanks to the 'id' param
    Session.findOne({_id:req.params.id})
           .then(session => {
                // if the request succeded
                if (!session) {
                    // if nothing was found
                    res.status(404);
                    return res.json({
                        status: "404",
                        message: "Session not found."
                    });
                } else {
                    // if session was found, delete this one
                    Session.deleteOne({_id:req.params.id}, function(err, result) {
                        if (err) {
                            // if the delete encounter errors
                            res.status(400);
                            return res.json({
                                status: "400",
                                message: "Could not delete session.",
                                sessionId: req.params.id
                            });
                        } else {
                            // if the delete succeded
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
                // if request failed
                res.status(404);
                return res.json({
                    status: "404",
                    message: "Session not found."
                });
           });
}
