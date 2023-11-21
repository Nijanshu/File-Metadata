var express = require('express');
var cors = require('cors');
app.use(express.json());

require('dotenv').config()

var app = express();

let bodyParser=require('body-parser');
const connectToMongo = require('./db');


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.use(bodyParser.urlencoded({ extended: false }));// express 11
app.use(bodyParser.json());


app.use('/api/fileanalyse', require('./routes/upload'));


const port = process.env.PORT || 3000;
app.listen(port,async() => {
  try{
    await connectToMongo();
  console.log(`iBlog listening at ${port}`);
}catch(e){
  console.log("error: ", e.message);}
});
