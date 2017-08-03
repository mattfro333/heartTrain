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
    name: 'Example 3',
    src: '../../images/CAH3.jpg'
  },
  {
    name: 'Example 4',
    src: '../../images/CAH1.jpg'
  }
];

var exports = module.exports = {}

exports.profile = function(req, res) {
  var arr2 = [];
  for(var i = 0; i < req.session.currentUser.cards.length; i++){
    for(var j = 0; j < profiles.length; j++){
      if(req.session.currentUser.cards[i] === profiles[j].name){
        arr2.push(profiles[j]);

       }
      }
    }
  console.log(arr2);
    res.status(200).json({
  currentUser: req.session.currentUser,
  cards: arr2
})
  }
