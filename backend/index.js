const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from harshitha!')
})
app.get('/api/names',(req,res)=>{
  const names=[
    {
      id:1,
      name:"harshitha"
    },
    {
      id:2,
      name:"durga"
    },
    {
      id:3,
      name:"raja"
    },
    {
      id:4,
      name:"rama"
    },
    {
      id:5,
      name:"aishwarya"
    }
  ]
  res.send(names);

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