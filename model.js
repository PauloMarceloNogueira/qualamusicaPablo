var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  token: String,
  active: Boolean
});

var User = mongoose.model('User', UserSchema);

module.exports = User;