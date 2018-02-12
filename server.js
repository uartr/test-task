const path = require('path');
const express = require('express');
const compression = require('compression');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 2000;

const publicPath = path.resolve(__dirname, 'dist');

const app = express();

app.use(compression());

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});