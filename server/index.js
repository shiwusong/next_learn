module.exports = async (app, options) => {
  app.register(require('./user'), {
    prefix: '/user'
  })
}
