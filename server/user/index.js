module.exports = async (app, options) => {
  app.get('/getName', async (req, res) => {
    try {
      return { code: 200, message: 'SHIWUSONG', url: req.url }
    } catch (e) {
      console.log(e)
      return { code: 500, message: 'error' }
    }
  })
}
