var mongoose = require('mongoose')
var User = require('./model.js');
class Database {
  connect() {
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("Connected!!")
    });
    mongoose.connect('mongodb://localhost/spotify');
  }

  insert(data) {
    var newUser = User({
      name : data.name,
      token: data.token,
      active: data.active
    })

    newUser.save(function(err){
      if (err) throw err;
      console.log("User Created!")
    })
  }

  get() {
    User.find({},function(err,user) {
      console.log(user,"USER!=======")
    })
  }
}

module.exports = new Database()