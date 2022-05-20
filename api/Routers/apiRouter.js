const express = require('express')
const router = express()

const apiController = require('./../Controllers/apiController')



router.get('/', apiController.index)
router.get('/register', apiController.register)
router.get('/special-offer', apiController.special_offer)
router.get('/delivery', apiController.delivery)
router.get('/contact', apiController.contact)
router.get('/products', apiController.products)
router.get('/product-details', apiController.product_details)
router.get('/compair', apiController.compair)
router.get('/product-summary', apiController.product_summary)
router.get('/faq', apiController.faq)
router.get('/tac', apiController.tac)
router.get('/legal-notice', apiController.legal_notice)
router.get('/login', apiController.login)
router.get('/components', apiController.components)
router.get('/forgetpass', apiController.forgetpass)


router.get('/get-categories', apiController.get_categories)









module.exports = router