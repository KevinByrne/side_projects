const express = require('express'); /* retrieves express library installed earlier via 'npm i express' */
const app =  express() /* calls express as a function */
const mongoose = require('mongoose') /* mongoose library */
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://localhost/blog') /* connects to defined db */

app.set('view engine', 'ejs')


app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  const articles = [{
    title: 'test article',
    createdAt: new Date(),
    description: 'Test description'
  },
{
  title: 'test article 2',
  createdAt: new Date(),
  description: 'Test description 2'
}]
  res.render('articles/index', { articles: articles })
})  

app.use('/articles', articleRouter)
app.listen(3000) /* assigns listen function to app variable and passes port number as argument */ 