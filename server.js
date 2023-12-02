const express = require('express');
const path = require('path');
const opn = require('opn');


const hbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.engine('hbs', hbs({
  extname: 'hbs',
  layoutsDir: 'views/layouts/',
  defaultLayout: 'main.hbs',
}));

app.set('view engine', 'hbs');

app.get('/hello/:name', (req, res) => {
  res.render('hello', {  name: req.params.name });
});

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/about', (req, res) => {
  res.render('about', { layout: 'dark' });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.post('/contact/send-message', (req, res) => {
  res.json(req.body);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  opn(`http://localhost:${port}`);
});
