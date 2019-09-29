//Set variables
require("dotenv").config();

// Variables
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require('moment'); 
moment().format();
var axios = require("axios");
var fs = require("fs");
var userOption = process.argv[2];
var inputParameter = process.argv.splice(3).join(" ");

switch (userOption) {
    case "concert-this":
        concertThis(inputParameter);
        break;
    case "spotify-this-song":
        spotifySong(inputParameter);
        break;
    case "movie-this":
        movieThis(inputParameter);
        break;
    case "do-what-it-says":
        doThis(inputParameter);
        break;
};


// Call functions
// console.log(userOption, inputParameter)
// if (userOption === 'movie-this') {
    function movieThis(userOption) {
        if(!userOption){
            userOption = "mr nobody";
        }
        axios.get("https://www.omdbapi.com/?t=" + userOption + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
                var movieResults = 
                    "--------------------------------------------------------------------" +
                        "\nMovie Title: " + response.data.Title + 
                        "\nYear of Release: " + response.data.Year +
                        "\nIMDB Rating: " + response.data.imdbRating +
                        "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                        "\nCountry Produced: " + response.data.Country +
                        "\nLanguage: " + response.data.Language +
                        "\nPlot: " + response.data.Plot +
                        "\nActors/Actresses: " + response.data.Actors;
                console.log(movieResults);
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

// } else if (userOption === 'spotify-this-song'){
    if(!userOption){
        userOption = "The Sign";
    }
    spotify
    .search({ type: 'track', query: userOption })
    .then(function(response) {
        for (var i = 0; i < 5; i++) {
            var spotifyResults = 
                "--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyResults);
        }
    })
    .catch(function(err) {
        console.log(err);
    });


// } else if (userOption === 'concert-this'){
    function concertThis(userOption) {
        axios.get("https://rest.bandsintown.com/artists/" + userOption + "/events?app_id=codingbootcamp")
        .then(function(response) {    
            for (var i = 0; i < response.data.length; i++) {
    
                var datetime = response.data[i].datetime; //Saves datetime response into a variable
                var dateArr = datetime.split('T'); //Attempting to split the date and time in the response
    
                var concertResults = 
                    "--------------------------------------------------------------------" +
                        "\nVenue Name: " + response.data[i].venue.name + 
                        "\nVenue Location: " + response.data[i].venue.city +
                        "\nDate of the Event: " + moment(dateArr[0], "MM-DD-YYYY"); //dateArr[0] should be the date separated from the time
                console.log(concertResults);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
            
    
    }

// } else if (userOption === 'do-what-it-says'){
    function doThis(userOption) {

        fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
                return console.log(error);
            }
            var dataArr = data.split(',');
            spotifySong(dataArr[0], dataArr[1]);
        })
    };
    




//  Function for log text
function logText(text){
    fs.appendFile("./TEXT/log.txt", text + "\n", function(err){
        if(err) throw err;
        // console.log("Logged")
    })
}
logText(userOption + ", " + inputParameter)

