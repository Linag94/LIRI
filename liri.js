//set variables
require("dotenv").config();
// import spotify
var Spotify = require("node-spotify-api");
// import the API keys
var keys = require("./keys");
// import axios 
var axios = require("axios");
// keys information 
var spotify = new Spotify(keys.spotify);


