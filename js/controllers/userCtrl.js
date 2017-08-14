var users = [
  {
    name: 'a',
    password: 'a',
    friends: ['Example 1', 'Example 2']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

var exports = module.exports = {}

exports.login = function(req, res) {
    for(var i = 0; i < users.length; i++){
      if(users[i].name === req.body.name && users[i].password === req.body.password){
        req.session.currentUser = users[i];
         res.send({ userFound: true });
         return;
      }
    }
      return res.send({ userFound: false });

}
