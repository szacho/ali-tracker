import mongoose from 'mongoose';
import * as providers from './providers';
import * as models from './models';

mongoose.Promise = global.Promise;

export default function(app) {
  app.get('/api', (req, res) => {
    res.send({api: "API server is ON!"});
  });

  app.post('/api/package', (req, res) => {
    switch (req.body.provider) {
      default: providers.ppsa(req, res);
    }
  });

  app.post('/api/token', async function(req, res) {
    try {
      const { number } = req.body;
      const token = await generateToken();
      const tokenToSave = new models.TokenUser({
        token,
        packagesNumbers: [ number ],
        lastUpdate: new Date()
      });

      const savedToken = await tokenToSave.save();
      console.log(`Token has been saved: ${ savedToken }`);
      res.status(200).send(savedToken);
    } catch(err) {
      console.log(err);
      res.status(422).send({ error: err.message });
    }
  });

  app.get('/api/token/:token', (req, res) => {
    models.TokenUser.findOne({ token: req.params.token })
      .then(val => {
        if(val) res.status(200).send({ val });
        else res.status(422).send({ error: 'Provided token does not match' });
      })
      .catch(err => {
        console.log(err);
        res.status(422).send({ error: err.message });
      });
  });

}

async function generateToken(res) {
  let token = (0|Math.random()*9e6).toString(36);
  let val = await models.TokenUser.findOne({ token });
  if(val) {
    console.log(`Token already exists: ${ val }`);
    generateT();
  }
  else {
    console.log(`Token has been created: ${ token }`);
    return token;
  }
}
