import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './router';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const PORT = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`API server listening on ${PORT}`);
});
