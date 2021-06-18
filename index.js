const ExpressServer = require('./server')

const server = ExpressServer.setInitialConfig(3000)

server.app.get('/', function (_req, res) {
  res.send('Test Successful')
})

server.start(() => console.log(`Server listening in port ${3000}`))
