const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico

app.use(express.static('public'));

const params = {
  nombre: 'Ramón Torres',
  titulo: 'Curso de Node'
}

app.get('/', (req, res) => {
  res.render('home', params);
});

app.get('/generic', (req, res) => {
  //res.sendFile(__dirname + '/public/generic.html');
  res.render('generic', params);
});

app.get('*', (req, res) => {
  //res.sendFile(__dirname + '/public/404.html');
  res.render('elements', params);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})