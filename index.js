require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/umardata', (req, res) => {
    res.send('Hello kya haal h umar bhai k')
  })
  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})