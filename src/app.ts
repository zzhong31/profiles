import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import path from 'path';

const app = express();
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true
  })
);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

export { app };
