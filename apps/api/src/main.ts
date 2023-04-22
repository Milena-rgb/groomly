/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { DBHelper } from './app/helper/db.helper';
import bodyParser from 'body-parser';
import { GuestService } from './app/guest/guest.service';
import cors = require("cors");

const corsOptions: cors.CorsOptions = {
  origin: ['http://localhost:4200']
};


const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/guests', async (req, res) => {
  res.json(await GuestService.getAll());
});

app.post('/api/guests', async (req, res) => {
  res.json(await GuestService.create(req.body));
});

app.delete('/api/guests/:id', async (req, res) => {
  res.json(await GuestService.delete(req.params.id));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

DBHelper.init();
