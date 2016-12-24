var express = require('express');
var app = express();
var slack = require('./slackBot.js');
var db = require('./database.js');

db.connect()
slack.getTopSongs('BQC25HMOBlzi3KkThMlYyrstpTSAG8JJ6DAN7lXKS9ypvw05IiOpIqYombVSswbY0K72H2PfkYbu1n-NP5ZWQuLt8MhkmzbO6Y1eviAfG-UxwI-z_yMZHyGY5GoVNVVZZjmQYj6YJJzxoMCLeX_r3t6pbJAqoDYmyjA0Sl7TB61_')