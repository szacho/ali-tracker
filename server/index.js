import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './router';
import mongoose from 'mongoose';
import cors from 'cors';
import RateLimit from 'express-rate-limit';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/alitracker');
mongoose.connection.once('open', () => {
  console.log('MongoDB connected!');
})
mongoose.connection.on('error', (error) => {
  console.log(`Connection error: ${error}`);
});

app.enable('trust proxy');

const apiLimiter = new RateLimit({
  windowMs: 60*60*1000,
  max: 1500,
  delayMs: 0,
  message: "Przekroczony limit połączeń, spróbuj ponownie za godzinę."
});

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json({ type: '*/*' }));
app.use('/api/', apiLimiter);
router(app);
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});


const PORT = process.env.PORT || 3010;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`API server listening on ${PORT}`);
});
