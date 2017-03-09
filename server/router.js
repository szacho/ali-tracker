import path from 'path';
import soap from 'soap';
import _ from 'lodash';


export default function(app) {
  app.get('/api', (req, res) => {
    res.send({api: "API server is ON!"});
  });

  app.post('/api/check', (req, res) => {
    const url = "https://tt.poczta-polska.pl/Sledzenie/services/Sledzenie?wsdl";
    soap.createClient(url, (err, client) => {
      if(err) { console.log(err); }
      client.setSecurity(new soap.WSSecurity('sledzeniepp', 'PPSA', {hasTimeStamp: false}));
      client.Sledzenie.SledzenieHttpSoap11Endpoint.sprawdzPrzesylke({numer: req.body.packageNumber}, (err, response) => {
        if(err) {console.log(err);}
        const { status } = response.return;
        if(status === 0) {
          const parcel = extractPackage(req.body.packageName, req.body.packageNumber, response.return.danePrzesylki);
          res.send(parcel);
        } else if(status === 1) {
          res.status(422).send({ error: "Istnieją różne przesyłki o podanym numerze." });
        } else {
          res.status(422).send({ error: "Brak przesyłki o podanym numerze." });
        }
      });
    });
  });
}

function extractPackage(name, number, value) {
  const parcel = {
    name,
    number: value.numer,
    done: value.zakonczonoObsluge,
    events: _.map(value.zdarzenia.zdarzenie, (val, key) => {
      return {
        eventName: val.nazwa,
        time: val.czas.split(' ')[0],
        place: val.jednostka.nazwa,
        code: val.kod,
        end: val.konczace
      };
    })
  };
  return parcel;
}
