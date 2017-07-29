var profiles = [
  {
    name: 'Example 1',
    src: '../../images/CAH1.jpg'
  },
  {
    name: 'Example 2',
    src: '../../images/CAH2.jpg'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg'
  }
];

var exports = module.exports = {}

exports.profile = function(req, res) {
  var arr2 = [];
  for(var i = 0; i < req.session.currentUser.friends.length; i++){
    for(var j = 0; j < profiles.length; j++){
      if(req.session.currentUser.friends[i] == profiles[j].name){
        arr2.push(profiles[j]);
       }
      }
    }
    res.status(200).json({
  currentUser: req.session.currentUser,
  friends: arr2
})
  }
