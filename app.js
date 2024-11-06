const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render("home");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT)