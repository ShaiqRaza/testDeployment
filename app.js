const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.resolve(__dirname, 'views'));  // Hardcode path for views

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render("home");
})

module.exports = app;