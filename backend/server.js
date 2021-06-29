const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Server started successfully.");
})

const activitiesRouter = require('./routes/activities');

app.use('/activities', activitiesRouter);

https.createServer({
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem')
}, app)
.listen(port, function () {
  console.log('Listening on port 5000.')
})
