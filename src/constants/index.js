const environment = process.env

module.exports = {
  env: {
    port: environment.port || 3000
  },
  apiPaths: {
    basePath: '/api',
    reverseTextPath: '/iecho'
  },
  errors: {
    noTextReceived: 'No text error'
  }
}
