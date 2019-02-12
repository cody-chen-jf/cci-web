const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()

const staticFileMiddleware = express.static('dist')
app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)

const port = 80
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
