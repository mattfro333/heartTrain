var productsData = [
  {
    name: 'a',
    password: 'a',
    friends: ['Card 1', 'Card 2']
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
$scope.products = productsData;
$scope.cart = [];
$scope.total = 0;

var exports = module.exports = {}

exports.login = function(req, res) {
    for(var i = 0; i < productsData.length; i++){
      if(productsData[i].name === req.body.name && productsData[i].password === req.body.password){
        req.session.productsData = productsData[i];
         res.send({ userFound: true });
         return;
      }
    }
      return res.send({ userFound: false });

}
