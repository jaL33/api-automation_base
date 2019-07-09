const tokens = [];
const accounts = [];

exports.login = function(req, res, next) {
  account = accounts.find(e => e.username === req.body.username &&
                               e.password === req.body.password);

   if(!account)
   {
      res.status(401);
      res.send({ error: 'Invalid username or password' })
   }
   else if(account.status === 'active')
   {
      let uuid = createUUID();
      tokens.push(uuid);
      res.setHeader('token', uuid);
      res.end();
   }
   else if(account.status === 'disabled')
   {
      res.status(403);
      res.send({ error: 'Account disabled' })
   }
   else if(account.status === 'locked')
   {
      res.status(403);
      res.send({ error: 'Account locked' })
   }
   else
   {
      res.status(401);
      res.send({ error: 'Unknown account status' })
   }
}

exports.logout = function(req, res, next) {
   let token = req.headers['token'];

   if(!token)
   {
      res.status(400);
      res.send({ error: 'No token header' })
   }

   var index = tokens.indexOf(token);

   if (index > -1) {
      tokens.splice(index, 1);
   }

   res.end();
}

exports.authenticate = function(req, res, next) {
  let token = req.headers['token'];

  if(!token)
  {
     res.status(400);
     res.send({ error: 'No token header' })
   }

   let authenticated = tokens.includes( token );
   res.send({ authenticated: authenticated});
}

exports.createUser = function(req, res, next) {

  if(!req.body.username ||
     !req.body.password ||
     !req.body.status)
  {
     res.status(400);
     res.send({ error: 'Missing username, password or status' })
  }

  accounts.push({
     username: req.body.username,
     password: req.body.password,
     status: req.body.status
  });

  res.end();
}

exports.deleteUsers = function(req, res, next) {
  accounts.length = 0;
  res.end();
}

exports.createToken = function(req, res, next) {
  let token = req.body.token;

  if(!token)
  {
     res.status(400);
     res.send({ error: 'No token in body' })
  }

  tokens.push(token);
  res.end();
}

createUUID = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
