const Server = require('./../../server')
const Constants = require('./../../constants')
const router = Server.getRouter()
const path = `${Constants.apiPaths.basePath}${Constants.apiPaths.reverseTextPath}`

router.get(path, (req, res) => {
  const { query: { text = '' } } = { ...req }
  res.status(200).send(`Test Successfuly, text: ${text}`)
})

module.exports = router
