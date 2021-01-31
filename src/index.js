const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.send('Hello!!')
})

app.listen(port, () => {
  console.log(`Node app 1 listening at http://localhost:${port}`)
})
