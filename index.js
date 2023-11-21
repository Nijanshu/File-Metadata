var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

let bodyParser = require('body-parser');
const connectToMongo = require('./db');

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

// Routes
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.use('/api/fileanalyse', require('./routes/upload'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await connectToMongo();
    console.log(`iBlog listening at ${port}`);
  } catch (e) {
    console.log("Error: ", e.message);
  }
});
