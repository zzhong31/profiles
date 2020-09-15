import { app } from './app';

const port = process.env.PORT;

app.listen(port || 5000, () => {
  console.log('app listening on port 5000');
});
