const Server = require('./../../server')
const iechoService = require('./service')
const constants = require('./../../constants')
const router = Server.getRouter()
const path = `${constants.apiPaths.basePath}${constants.apiPaths.reverseTextPath}`

router.get(path, async (req, res) => {
  const { query: { text = '' } } = { ...req }
  const result = await iechoService(text)
  res.status(result.status).send(result.response)
})

module.exports = router
