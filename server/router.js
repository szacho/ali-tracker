import path from 'path';
import * as providers from './providers';

export default function(app) {
  app.get('/api', (req, res) => {
    res.send({api: "API server is ON!"});
  });

  app.post('/api/package', (req, res) => {
    switch (req.body.provider) {
      default: providers.ppsa(req, res);
    }
  });

}
