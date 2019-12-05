const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
  nom: {
    type: String,
    required: 'Votre nom'
  },
  prenom: {
    type: String,
    required: 'Votre prénom'
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },

  isAdmin: Boolean

});

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('privatekeyipssi'));
  return token;
}

module.exports = mongoose.model('Users', userSchema);
