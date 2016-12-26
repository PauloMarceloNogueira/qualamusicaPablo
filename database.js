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

  get(name,callback) {
    User.find({},function(err,user){
      if(err) {
        callback(err,null)
      } else {
        callback(null,user)
      }
    })
  }

  getToken(a,callback) {
    console.log(typeof(a),"NAME")
    var user = a
    User.find({name:"Fran Boni"},function(err,token){
      console.log(token,"AQU")
      if(err){
        console.log(err,"ERRRR")
        callback(err,null)
      } else {
        console.log(token,"TOKEEEN")
        callback(null,token)
      }
    })
  }
}

module.exports = new Database()