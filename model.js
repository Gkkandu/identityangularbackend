const mongoose = require('mongoose');

const IdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  father: { type: String, required: true },
  mother: { type: String, required: true },
  gender: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  
});

const Identity = mongoose.model('Identity', IdSchema);
module.exports = Identity;
