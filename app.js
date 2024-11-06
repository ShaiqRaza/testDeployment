const express = require('express');
const path = require('path');
const app = express();

// Set the views directory to the full absolute path
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
      res.render("home");
});

module.exports = app;