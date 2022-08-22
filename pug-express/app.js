const express = require('express'); 
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {maths: 6 * 6, 
    test: 2 + 2});
});

const userRouter = require("./routes/users")

app.use('/users', userRouter)

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});