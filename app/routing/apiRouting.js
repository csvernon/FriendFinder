var friendsArray = require('../data/friends');

module.exports = function(app) {

    app.get('/api/friends', (req, res) => {
       res.json(friendsArray)
    })

    app.post('/api/friends', (req, res) => {
        var match = require('../logic/Match.js')(req, friendsArray);
        res.json(match);
        if(match)
            friendsArray.push(req.body);
    });
    
};