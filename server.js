const express = require('express')
require('dotenv').config();
require('./config/config.db')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.MONGO_PORT | 5050;


app.get('/',async (req,res)=>{
    res.send('open')
})

// cors configuration
app.use(
  cors({
    origin: true,
    credentials: true
  })
);


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});


app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const logsRoute = require('./src/routes/LogsRoute');


app.use('/logs/', logsRoute);



// Start the server
app.listen(PORT, () => {
  console.log(`Serveur lancer sur le port ${PORT}`);
});