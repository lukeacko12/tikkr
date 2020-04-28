const express = require('express');
const app = express();

const getStocksRoutes = require('./routes/getCrypto');
const getFav = require('./routes/getUserFavourites')

app.use('/crypto', getStocksRoutes, getFav);

module.exports = app;