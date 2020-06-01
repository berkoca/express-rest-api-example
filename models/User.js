var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: 'user'
  },
  createdAt: {
    type: String,
    required: true
  }
}, {versionKey: false});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');