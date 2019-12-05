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
};

exports.register = function(req, res){
  var new_user = new User(req.body);

  new_user.save(function(err, user){
    if(err){
      res.status(400);
      res.json({status: res.status(400),
        message: "Could not create user.",
        users: user
      });
    }
    res.status(201);
    res.json({status: "201",
        message: "User created.",
        user: new_user}
  );
  })
};
