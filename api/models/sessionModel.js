// Get "mongoose" library
const mongoose = require('mongoose');
// Get "mongoose" Schema
var Schema     = mongoose.Schema;

// create a new Schema and store it into a variable
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

// Export the sessions schema 
module.exports = mongoose.model('Sessions', sessionSchema);
