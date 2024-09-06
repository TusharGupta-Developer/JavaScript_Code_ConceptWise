const express = require('express')
const app = express()
const port = 3000; // Change this to your desired port number


app.get('/about', (req, res) => {
  res.send('about')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})