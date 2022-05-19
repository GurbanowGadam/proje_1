const apiRouter = require('./apiRouter')
const adminRouter = require('./adminRouter')


module.exports = (app) => {
    app.use('/api', apiRouter)
    app.use('/admin', adminRouter) // token barlap gecir
}