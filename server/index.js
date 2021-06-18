const express = require('express')
const cors = require('cors')

class ExpressServer {
  constructor (port = 3000) {
    this.app = express()
    this.port = port
  }

  static setInitialConfig (port = 3000) {
    return new ExpressServer(port)
  }

  _getCorsOptions () {
    const options = {
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
        'Authorization'],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: '*',
      preflightContinue: false
    }

    return options
  }

  start (callback = () => { }) {
    const CORS_OPTIONS = this._getCorsOptions()
    this.app.listen(this.port, callback)
    this.app.use(cors(CORS_OPTIONS))
  }
}

module.exports = ExpressServer
