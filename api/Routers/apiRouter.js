const express = require('express')
const router = express()

const apiController = require('./../Controllers/apiController')



router.get('/', apiController.index)






module.exports = router