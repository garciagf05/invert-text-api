const AppServer = require('./src/server')
const constants = require('./src/constants')
const api = require('./src/api')

const { env: { port: appPort } } = { ...constants }
const server = AppServer.getInstance(appPort)

server.start(() => console.log(`Server listening in port ${appPort}`))

server.app.use(api)

module.exports = server.app
