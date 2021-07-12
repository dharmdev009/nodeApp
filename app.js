const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send(`<div style="color:green">
  Hi this site belongs to dharm dev
  </div>
  <div style="height:80vh; width:100vw;display: flex; flex-direction:row; justify-content: center; align-items:center;">
  This is a testing for heroku deployment of a node js application!!!
  </div>`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});