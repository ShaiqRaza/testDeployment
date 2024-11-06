const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render("home");
})
const PORT = process.env.NODE_ENV || 3000;
app.listen(PORT)