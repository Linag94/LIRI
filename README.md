# LIRI: 
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The Commands are:

# What Each Command does:

## Spotify-this-song [Song Name Here]
output the following information about the song the user enters in the terminal window. If no song is provided then the program will default to “The Sign” by Ace of Base.

 **The song’s name**

-Artist(s)

-A preview link of the song from Spotify

-The album that the song is from


## Movie-this [Movie Name Here]
This will output the following information about the movie the user enters to the terminal window. If the user doesn’t supply a movie name, the program will default to “Mr. Nobody.”

**Title of the movie**

-Year the movie came out

-IMDB Rating of the movie

-Rotten Tomatoes Rating of the movie

-Country where the movie was produced

-Language of the movie

-Plot of the movie

-Actors in the movie

## Do-what-it-says [Users Instructions]
 Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI’s commands.

**Data Output** In addition to logging the data to the terminal, data will also be output and appended to a .txt file called log.txt.

# Project Built With

**JavaScript**   
 **Node.js**   
**Spotify and OMDB API**