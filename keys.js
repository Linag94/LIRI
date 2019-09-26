console.log('this is loaded');
console.log(process.env.TEST)

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

