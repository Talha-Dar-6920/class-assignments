import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('This is the Initial Hello World!!! Server');
});

app.listen(process.env.PORT || 3000);
