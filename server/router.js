import mongoose from 'mongoose';
import * as providers from './providers';
import * as models from './models';

mongoose.Promise = global.Promise;

export default function(app) {

  app.post('/api/package', async function(req, res) {
    switch (req.body.provider) {
      default:
        providers.ppsa(req, res, function(parcel) {
          console.log(parcel); //todo
        });
    }
  });

  app.post('/api/token', async function(req, res) {
    try {
      const { packageNumber, provider } = req.body;

      const token = await generateToken();
      const tokenToSave = new models.TokenUserModel({
        token,
        packagesNumbers: [ packageNumber ],
        lastUpdate: new Date()
      });
      const savedToken = await tokenToSave.save();
      console.log(`Token has been saved: ${ savedToken }`);

      switch (provider) {
        case 'PPSA':
          providers.ppsa(req, res, savedToken.token, async (parcel) => {
            const parcelToSave = new models.PackageModel(parcel);
            const savedParcel = await parcelToSave.save();
            res.status(201).send({ savedToken, savedParcel });
          });
          break;
        default:
          res.send({ error: 'Niepoprawny wybór dostawcy' });

      }


    } catch(err) {
      console.log(err);
      res.status(422).send({ error: err.message });
    }
  });

  app.get('/api/token/:token', (req, res) => {
    models.TokenUserModel.findOne({ token: req.params.token })
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
  let val = await models.TokenUserModel.findOne({ token });
  if(val) {
    console.log(`Token already exists: ${ val }`);
    generateT();
  }
  else {
    console.log(`Token has been created: ${ token }`);
    return token;
  }
}
