const express =  require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport =  require('passport'),
      Auth0Strategy = require('passport-auth0'),
      config = require('./config');
      // stripe = require('stripe')('sk_test_ojIEBahfiCZioN7BIQjalw3A'),
      // stripe = require('passport-stripe'),
      // cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname));

const massiveInstance = massive.connectSync({connectionString: 'ywrnnhex://ywrnnhex:OVwuOaekCTocrZnaXzLM1brgAscV5jlH@stampy.db.elephantsql.com/ywrnnhex'})

app.set('db', massiveInstance);
const db = app.get('db');
process.setMaxListeners(0);
passport.use(new Auth0Strategy({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: config.auth0.callbackURL
},
function(accessToken, refreshToken, extraParams, profile, done) {
  db.user.getUserByAuthId([profile.id], function(err, user){
    user = user[0];
    if (!user) {
      console.log('CREATING USER');
      db.user.createUserByAuth([profile.displayName, profile.id], function(err, user){
        return done(err, user[0]);
      })
    } else {
      console.log('FOUND USER', user);
      return done(err, user);
    }
  })
}

));

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(obj, done){
  done(null, obj);
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/#/cart',
  failureRedirect: '/auth'
}));

app.get('/auth/me', function(req, res, next){
  if (!req.user) { return res.status(404).send('User not found');
}
 return  res.status(200).send(req.user);
});

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

db.init.createPaymentTable([], function(err, results){
  if (err){
    console.error(err);
  } else {
    console.log("Initialized Payment Table");
  }
})
module.exports = massiveInstance;
var paymentCtrl = {
create:function(req, res, next){
  db.payment.create_payment([
    req.body.name,
    req.body.amount,
    req.body.date,
    req.body.userid
  ], function(err, results){
    if (err){
      console.error(err);
      return res.send(err);
    }else {
      res.send(results)
    }
  })
},
 getPayments:function(req, res){
   db.payment.read_payments([], function(err, results){
     if(err){
       console.error(err);
       return res.send(err);
     }
     return res.send(results);
   })
 },
   getPayment:function(req, res){
     db.payment.read_payment([req.params.paymentId],
     function(err, results){
       if (err){
         console.error(err);
         return res.send(err);
       }
       if (results.length == 0){
         return res.status(404).send("No payment found.")
       }
       return res.send(results[0]);
     })
   },
   update:function(req, res){
     db.payment.update_payment([
       req.body.name,
       req.body.amount,
       req.body.date,
       req.body.userid
     ],
   function(err, results){
     if(err){
       console.error(err);
       return res.send(err);
     }
     return res.send(results[0]);
   })
 },
   delete:function(req, res){
     db.payment.delete_payment([req.params.paymentId], function(err, results){
       if (err){
         console.error(err);
         return res.send(err);
       }
       if (results.length === 0){
         return res.status(404).send("Payment not found.");
       }
       res.send('Payment for ' + results[0].name + ' has been deleted.');
     })
   }
 }
app.get('/api/payments', paymentCtrl.getPayments);
app.get('/api/payment/:paymentId', paymentCtrl.getPayment);
app.post('/api/infopayment', paymentCtrl.create);
app.put('/api/payment/:paymentId', paymentCtrl.update);
app.delete('/api/payment/:paymentId', paymentCtrl.delete)

app.listen(3000, function() {
  console.log('Connected on 3000')
})
