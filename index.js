const express = require('express')
const path = require('path')

const app = express()
const hbs = require('hbs');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/assets', express.static(__dirname + '/public'));


app.get ('/index', (req, res) => {
	res.render('index');
});
app.get ('/contact', (req, res) => {
	res.render('contact');
});
app.get ('/about', (req, res) => {
	res.render('about');
});

app.listen(8000,() =>{
	console.log('Server started on port 8000...');
});