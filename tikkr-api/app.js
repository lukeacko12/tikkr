const express = require('express');
const app = express();

const getStocksRoutes = require('./routes/getCrypto');

app.use('/crypto', getStocksRoutes);

module.exports = app;