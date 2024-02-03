import express from 'express';
import cors from 'cors';
import { Routes } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

const routes = new Routes(app);
routes.register();

app.get('/healthCheck', (req, res) => {
  res.json({ success: true });
});

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('APP RUNNING AT 4000!');
});
