import express from 'express';
import routes from './routes';
import { mongoConnect } from './services/mongodb';

const app = express();
app.use(express.json());
app.use(routes);
mongoConnect();

app.listen(3333);
