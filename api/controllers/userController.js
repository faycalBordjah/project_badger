const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');
User = mongoose.model('Users');

exports.list_all_users = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.status(400);
            res.json({error: "Bad request"});
        }
        res.status(200);
        res.json(users);
    })
};

exports.register = function (req, res) {
    var new_user = new User(req.body);

    new_user.save(function (err, user) {
        if (err) {
            res.status(400);
            res.json({
                status: "400",
                message: "Could not create user.",
                data: user
            });
        }
        res.status(201);
        res.json({
                status: "201",
                message: "User created.",
                data: new_user
            }
        );
    })
};

exports.login = function (req, res) {
    User.findOne({mail: req.body.mail}, function (err, user) {
        if (err) res.send(err);
        if (!user) {
            res.status(400);
            res.json({
                status: "404",
                message: "USer not found.",
                user: user
            });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            jwt.sign({user}, config.get("jwt_signature"),
                {expiresIn: '1h'}, (err, token) => {
                    if (err) res.send(err);
                    res.json({
                        token: token
                    });
                })
        } else {
            res.status(400);
            res.json({
                status: "400",
                message: "Authentication failed.",
                data: null
            });
        }
    })
}
