const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render("index");
});
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/services', (req, res) => {
  res.render('services')
})
app.get('/works', (req, res) => {
  res.render('works')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})
app.listen(8080, ()=>{console.log("App rodando!")});