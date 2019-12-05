const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

userSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model('Users', userSchema);
