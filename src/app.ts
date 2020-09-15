import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import path from 'path';
import cors from 'cors';

import { basicAccountInfoRouter } from './routes/BasicAccountInfo';

const app = express();

app.set('trust proxy', true);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true
  })
);
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(basicAccountInfoRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

export { app };
