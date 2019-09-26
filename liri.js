//Set variables
require("dotenv").config();

// Variables
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var userOption = process.argv[2];
var inputParameter = process.argv.splice(3).join(" ");

// Call functions
console.log(userOption, inputParameter)
if (userOption === 'movie-this') {
    //  run movie function

} else if (userOption === 'spotify-this-song'){
    //   run spotify function

} else if (userOption === 'concert-this'){
    //  run concert function

} else if (userOption === 'do-what-it-says'){
    //  run do what it says function
    
};



//  Function for log text
function logText(text){
    fs.appendFile("./TEXT/log.txt", text + "\n", function(err){
        if(err) throw err;
        // console.log("Logged")
    })
}
logText(userOption + ", " + inputParameter)

