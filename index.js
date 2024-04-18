const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from harshitha!')
})
app.get('/contact', (req, res) => {
    res.send('<h1> you are on contact page </h1>')
  })
  app.get('/login', (req, res) => {
    res.send('Login page!')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})