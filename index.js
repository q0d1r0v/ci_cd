const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World! worked')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
