const express = require('express'); /* express library */
const app = express(); /* calls express function and assigns to app variable */
const path = require('path')
const hbs = require('hbs')



app.set('views', path.join(__dirname));
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  console.log('Here')
  res.render('views/index')
}); 

app.listen(3000) /* opens port to localhost:3000 to view in browser */ 