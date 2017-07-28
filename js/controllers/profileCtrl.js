var profiles = [
  {
    name: 'Shoot Darn',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Want to host my Group project',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
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
