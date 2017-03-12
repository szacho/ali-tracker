import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './router';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/alitracker');
mongoose.connection.once('open', () => {
  console.log('MongoDB connected!');
})
mongoose.connection.on('error', () => {
  console.log(`Connection error: ${error}`);
});

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const PORT = process.env.PORT || 3010;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`API server listening on ${PORT}`);
});
