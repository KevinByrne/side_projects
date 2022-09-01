const express = require('express') 
const articleRouter = require('./routes/articles')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog')


app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) =>{
  const articles = [{
    title: 'test article',
    createdAt: new Date(),
    description: 'Test description'
  },
  {
    title: 'test article2',
    createdAt: new Date(),
    description: 'Test description2'
  }]

  res.render('articles/index', { articles: articles })
})

app.listen(3000)