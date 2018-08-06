// LOAD DATA
var friendData = require("../data/friends");

// ROUTING
module.exports = function (app) {
  // API GET Requests
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {

    //collect input data
    var choiceResponse = req.body;
    console.log(choiceResponse);

    //Determine the user's most compatible friend 
    var bestScore = 50000000000000;
    var bestMatch = {};

    for (var i = 0; i < friendData.length; i++) {
      var friendScore = compareScores(choiceResponse.friendScores, friendData[i].friendScores);

      if (friendScore < bestScore) {
        bestScore = friendScore;
        bestMatch = friendData[i]
      }
    }
    res.json(bestMatch)
  });

  function compareScores(userScores, friendScores) {
    var difference = 0
    for (var i = 0; i < userScores.length; i++) {
      difference += Math.abs(userScores[i] - friendScores[i]);
    }
    return difference
  }

};
