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

  app.post('/api/token', (req, res) => {
    const { number } = req.body;
    generateToken((token) => {
      const newToken = new models.TokenUser({
        token,
        packagesNumbers: [ number ],
        lastUpdate: new Date()
      });

      newToken.save()
      .then(val => {
        console.log(`Created new token: ${val.token}`);
        res.status(200).send(val)
      })
      .catch(err => {
        console.log(err);
        res.status(422).send({ error: err.message });
      });
    });
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

function generateToken(callback) {
  let token = (0|Math.random()*9e6).toString(36);

  models.TokenUser.findOne({ token })
    .then(val => {
      if(val) generateToken(callback);
      else callback(token);
    })
    .catch(err => {
      console.log(err);
      res.status(422).send({ error: err.message });
    });
}
