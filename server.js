const express = require('express');

const app = express();
const env = require('./config/env');
const setupRoutes = require('./routes/index');
// eslint-disable-next-line no-unused-vars
const datasApp = require('./datas/index');

app.use(express.json());

setupRoutes(app);

app.listen(env.PORT, env.HOSTNAME, () => {
  console.log(`Serveur turn to ${env.HOSTNAME}:${env.PORT}`);
});
