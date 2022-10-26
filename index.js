const express = require('express');

const cors = require('cors');

const career = require('./data/career.json');

const app = express();

app.use(cors());

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/career', (req, res) => {
  res.send(career);
});

app.get('/career/:id', (req, res) => {
  const id = req.params.id;
  const cr = career.find((c) => c.id === id);
  res.send(cr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
