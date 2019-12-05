const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config/default');
User = mongoose.model('Users');

exports.list_all_users = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.status(400);
            res.json({error: "erreur"});
        }
        res.status(200);
        res.json(users);
    })
};

exports.register = function (req, res) {
    var new_user = new User(req.body);

    new_user.save(function (err, user) {
        if (err) {
            res.json({
                status: res.status(400),
                message: "Could not create user.",
                data: user
            });
        }
        res.status(201);
        res.json({
                status: res.status(201),
                message: "User created.",
                data: new_user
            }
        );
    })
};

exports.login = function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) res.send(err);
        if (user.email === req.body.email
            && user.password === req.body.password) {
            jwt.sign({user}, config.default.jwt_signature,
                {expiration: '1h'}, (err, token) => {
                if (err) res.send(err);
                res.json({token: token,
                user_id: user._id});
            })
        } else {
            res.json({
              status: res.status(400),
              message: "Authentication failed.",
              data: null
            });
        }
    })
}
