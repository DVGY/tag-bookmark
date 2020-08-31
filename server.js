const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const bookmarkRoute = require('./routes/bookmarkRoute');
const tagRoute = require('./routes/tagRoute');

const app = express();
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

app.use(express.json());

const db = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('\x1b[32m%s\x1b[0m', 'DB connection successfull!'))
  .catch((err) => console.log(err.message));

const port = 6000;

app.use('/api/bookmark', bookmarkRoute);
app.use('/api/tag', tagRoute);

const server = app.listen(port, () => {
  console.log('Express running on port', port);
});
