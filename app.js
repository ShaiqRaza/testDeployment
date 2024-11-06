const express = require('express');
const path = require('path');
const app = express();

// Set the views directory to the full absolute path
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    try {
      // Render the home page
      res.render("home");
    } catch (err) {
      // If there's an error, handle it here
      console.error('Error rendering the page:', err.message);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = app;