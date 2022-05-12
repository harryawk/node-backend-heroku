const express = require('express');

const app = express();

app.get('/ping', async function(req, res) { res.send('Hello World'); });

const port = process.env.PORT || process.env.APP_PORT || 5000;

app.listen(port, function() { console.log(`App running in PORT: ${port}`); });