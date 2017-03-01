import path from 'path';
import soap from 'soap';
import _ from 'lodash';


export default function(app) {
  app.get('/api', (req, res) => {
    res.send({api: "API server is ON!"});
  });
}
