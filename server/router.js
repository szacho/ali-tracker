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
    const { token, number } = req.body;
    const newToken = new models.TokenUser({
      token,
      packagesNumbers: [ number ],
      lastUpdate: new Date()
    });

    newToken.save().then(
      val => console.log(val), err => console.log(err)
    );

  });
}
