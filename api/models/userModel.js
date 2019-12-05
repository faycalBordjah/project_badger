const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('config');
var Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: 'Votre nom'
  },
  mail: {
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
