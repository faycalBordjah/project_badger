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
  }
});

module.exports = mongoose.model('Users', userSchema);
