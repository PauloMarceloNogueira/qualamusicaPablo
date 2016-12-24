var Botkit = require('./node_modules/botkit/lib/Botkit.js');
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi()
var oauth = require('./oauth/app.js')
var db = require('./database.js')
var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: 'xoxb-119121304389-9fmMo2zkx4RxmiiQSauOq4W6'
}).startRTM();

class slackBot {
  getTopSongs(token) {
    spotifyApi.setAccessToken(token);
    controller.hears(['oi'], 'direct_mention', function(bot, message) {
      spotifyApi.getMyTopTracks({
        limit : 50,
        offset: 0
      })
      .then(function(data) {
        bot.reply(message, data.body.items[39].external_urls.spotify);
        // bot.reply(message, data.body.items[index].external_urls.spotify);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
    });

    controller.hears(['getAccess'],'direct_mention',function(bot,message){
      oauth.getAccess()
      bot.reply(message, "http://localhost:8888");

    })

    controller.hears(['users'],'direct_mention',function(bot,message){
      db.get()
    })
  }


}

module.exports = new slackBot();


