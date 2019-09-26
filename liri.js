//set variables
require("dotenv").config();

// variables
var Spotify = require("node-spotify-api");
var Spotify = new Spotify(keys.spotify);
var keys = require("./keys");
var axios = require("axios");
var request = require("request");
var fs = require("fs");
var userOption = process.argv[2]; 
var inputParameter = process.argv[3];




