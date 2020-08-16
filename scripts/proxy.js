const express = require('express')
const {
  createProxyMiddleware
} = require('http-proxy-middleware')
const cors = require('cors')
const config = require('./config')

const app = express()

app.use(cors())
app.use(
  createProxyMiddleware('/', {
    target: `http://${config.devServer.host}:${config.devServer.port}`,
    changeOrigin: true
  })
)

app.listen(config.devServer.proxy, error => {
  if (error) {
    console.error(error)
    return
  }
  console.info(`✔️  Server start on ${config.devServer.proxy}`)
})
