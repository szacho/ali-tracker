import mongoose from 'mongoose';
import * as providers from './providers';
import * as models from './models';

mongoose.Promise = global.Promise;

export default function(app) {

  app.get('/api/package/:provider/:packageNumber', function(req, res, next) {
    try {
      const { packageNumber, provider } = req.params;
      switch (provider) {
        case 'PPSA':
          providers.ppsa(res, packageNumber, provider, function(parcel) {
            res.status(200).send(parcel);
          });
        break;
        default:
          res.send({ error: 'Niepoprawny wybór dostawcy' });
      }
    } catch(err) { next(err) }
  });

  app.post('/api/package', async function(req, res, next) {
    try {
      const { token, number } = req.body.package;
      const alreadySaved = await models.PackageModel.findOne({ token, number });
      if(!alreadySaved) {
        const packageToSave = new models.PackageModel(req.body.package);
        const savedPackage = await packageToSave.save();
        res.send(savedPackage)
      } else {
        res.send({ message: `Package ${alreadySaved.number} is already saved` });
      }

    } catch(err) { next(err) }
  });

  app.put('/api/token', async function(req, res, next) {
    const { token, packageName, packageNumber, provider } = req.body;
    try {
      const foundToken = await models.TokenUserModel.findOne({ token });
      foundToken.packages = [ ...foundToken.packages, { packageName, packageNumber, provider } ];
      const updatedToken = await foundToken.save();
      res.send(updatedToken);
    } catch(err) { next(err) }
  });

  app.post('/api/token', async function(req, res, next) {
    try {
      const { packageName, packageNumber, provider } = req.body;
      const token = await generateToken();
      const tokenToSave = new models.TokenUserModel({
        token,
        packages: [{ packageName, packageNumber, provider }],
        lastUpdate: new Date()
      });
      const savedToken = await tokenToSave.save();
      console.log(`Token has been saved: ${ savedToken }`);
      res.status(201).send({ savedToken });

    } catch(err) { next(err) }
  });

  app.get('/api/token/:token', async function(req, res, next) {
    try {
      const token = await models.TokenUserModel.findOne({ token: req.params.token });
      if(token) {
        res.status(200).send({ token });
      } else res.status(422).send({ error: 'Provided token does not match' });
    } catch(err) { next(err) }
  });
}

async function generateToken() {
  try {
    let token = (0|Math.random()*9e6).toString(36);
    let val = await models.TokenUserModel.findOne({ token });
    if(val) {
      console.log(`Token already exists: ${ val }`);
      generateToken();
    }
    else {
      console.log(`Token has been created: ${ token }`);
      return token;
    }
  } catch(err) { next(err) }
}
