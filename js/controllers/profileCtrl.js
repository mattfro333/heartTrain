var profiles = [
  {
    name: 'Card 1',
    src: '../../images/CAH1.jpg'
  },
  {
    name: 'Card 2',
    src: '../../images/CAH2.jpg'
  },
  {
    name: 'Card 3',
    pic: '../../images/CAH3.jpg'
  },
  {
    name: 'Card 4',
    pic: '../../images/CAH1.jpg'
  },
  {
    name: 'Card 5',
    pic: '../../images/CAH3.jpg'
  }
];

var exports = module.exports = {}

exports.profile = function(req, res) {
  var arr2 = [];
  for(var i = 0; i < req.session.User.friends.length; i++){
    for(var j = 0; j < profiles.length; j++){
      if(req.session.User.friends[i] == profiles[j].name){
        arr2.push(profiles[j]);
       }
      }
    }
    res.status(200).json({
  User: req.session.User,
  friends: arr2
})
  }
