const mongoose = require('mongoose');
User = mongoose.model('Users');

exports.list_all_users = function (req, res){
  User.find({}, function(err, users){
    if(err){
      res.status(400);
      res.json({error: "erreur"});
    }
    res.status(200);
    res.json(users);
  })
}

exports.create_user = function(req, res){
  var new_user = new User(req.body);

  new_user.save(function(err, user){
    if(err){
      res.status(400);
      res.json({error: err});
    }
    res.status(201);
    res.json(user);
  })
}
