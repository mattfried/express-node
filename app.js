const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who won the hockey game tonight?", hint: "It wasn't San Jose Sharks."});
});


app.listen(3000, () => {
  console.log('The application is running on locahost:3000!')
});

// once 'nodemon' is installed
// run 'nodemon' command instaed of having to
// manually stop and restart server
