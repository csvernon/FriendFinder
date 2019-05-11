var friends = require("../data/friends.js");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var friendInput = req.body;
        var friendanswers = friendInput.answers;
        var match = {
            name: "",
            photo: "",
            match: 0
        }
        var matchArray = [];
        for (var i = 0; i < friends.length; i++) {
            var score = 0;
            for (var z = 0; z < friendanswers.length; z++) {
                score += (Math.abs(friends[i].answers[z] - friendanswers[z]));
            }
            matchArray.push(score);
            var bestMatch = Math.min(...matchArray);
            if (score === bestMatch) {
                match.name = friends[i].name;
                match.photo = friends[i].photo;
            }
        };
        friends.push(friendInput);
        res.json(match);
    });
};
