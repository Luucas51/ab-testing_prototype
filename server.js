require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { equals } = require('ramda');

if (equals(true, process.env.DB_LOCAL)) {
  require('./models/db');
} else {
  require('./models/dbAtlas')
}

const app = express();

const PORT = process.env.PORT || 8085;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')());
app.use(require('helmet')());
app.use('/api/version', require('./routes/version'));

// Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );