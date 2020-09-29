const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello Word!');
});

app.get('/budget', (req, res) => {
    var budget = require("./budget.json");
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});