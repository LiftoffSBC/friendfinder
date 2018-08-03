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
    //collect survey data
    for (var i = 0; i < choiceResponse.scores.length; i++) {
      choiceResponse.scores[i] = parseInt(choiceResponse.scores[i]);
    }
    //Determine the user's most compatible friend 
    var firstMatch = 0;
    var minDiff = 50;

    //Compare the difference between current user's scores against those from other users.
    //Add up the differences to calculate the `totalDifference`.
    for (var i = 0; i < friendScores.length; i++) {
      var totalDifference = 0;
      for (var j = 0; j < friendScores[i].scores.length; j++) {
        var difference = Math.abs(choiceResponse.scores[j] - friendScores[i].scores[j]);
        totalDifference += difference;
      }
      //    * The closest match will be the user with the least amount of difference.
      if (totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }
    friendData.push(choiceResponse);
    res.json(friendData);
  // 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
  //    * The modal should display both the name and picture of the closest match.
    $("<modal>").append(friendData);
  });



  // console.log(friendData);
};
