const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

let sessionSchema = new Schema({
  nom: {
    type: String,
    required: 'Renseigné le nom de la session'
  },
  description: {
    type: String
  },
  annee: {
    type: Number,
    required: 'Renseigné l\'année de la session'
  }
});

module.exports = mongoose.model('Sessions', sessionSchema);
