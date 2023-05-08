'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(`/wiki`, require('./routes/api/wiki.js'));

// https
app.enable('trust proxy');

if (module === require.main) {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}...`);
    });
}
module.exports = app;