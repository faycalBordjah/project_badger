const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let studentSchema = new Schema({
  nom: {
    type: String,
    required: 'Votre nom'
  },
  prenom: {
    type: String,
    required: 'Votre prénom'
  },
  session: {
    type: String,
    required: 'Votre session'  
  }
});

module.exports = mongoose.model('Students', studentSchema);