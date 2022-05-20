const express = require('express')
const router = express()

const apiController = require('./../Controllers/apiController')



router.get('/', apiController.index)
router.get('/register', apiController.register)
router.get('/special-offer', apiController.special_offer)
router.get('/delivery', apiController.delivery)
router.get('/contact', apiController.contact)







module.exports = router