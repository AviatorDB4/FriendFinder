//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
var surveyFriends = require('../data/friends.js');

module.exports = function(app){
  //GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(surveyFriends);
  });

  app.post('/api/friends', function(req,res){
    //getss new friend's scores and compares with friends in surveyFriends array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;
    var friendCount = 0;
    

    //runs through all current friends in list
    for(var i=0; i<surveyFriends.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var a=0; a<newFriendScores.length; a++){
        scoresDiff += (Math.abs(parseInt(surveyFriends[i].scores[a]) - parseInt(newFriendScores[a])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var foundFriend = surveyFriends[bestMatch];
    res.json(foundFriend);

    //pushes new submission into the friendsList array
    surveyFriends.push(req.body);
  });
};