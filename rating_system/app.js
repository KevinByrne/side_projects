const express = require('express');
const app = express();

app.set('view engine' , 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req, res) =>{
  res.render('index')
});

app.listen(3000);