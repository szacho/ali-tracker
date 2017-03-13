import soap from 'soap';
import _ from 'lodash';


export function ppsa(req, res, token, callback) {
  const url = "https://tt.poczta-polska.pl/Sledzenie/services/Sledzenie?wsdl";
  soap.createClient(url, (err, client) => {
    if(err) { console.log(err); }
    client.setSecurity(new soap.WSSecurity('sledzeniepp', 'PPSA', {hasTimeStamp: false}));
    client.Sledzenie.SledzenieHttpSoap11Endpoint.sprawdzPrzesylke({numer: req.body.packageNumber}, (err, response) => {
      if(err) {console.log(err);}
      const { status } = response.return;
      if(status === 0) {
        const parcel = extractPPSAPackage(req.body.packageName, req.body.packageNumber, token, response.return.danePrzesylki);
        callback(parcel);
      } else if(status === 1) {
        res.status(422).send({ error: "Istnieją różne przesyłki o podanym numerze." });
      } else {
        res.status(422).send({ error: "Brak przesyłki o podanym numerze." });
      }
    });
  });
}


function extractPPSAPackage(name, number, token, value) {
  const parcel = {
    token,
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
