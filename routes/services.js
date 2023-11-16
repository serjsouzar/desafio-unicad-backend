const router = require('express').Router()
const deliveryController = require('../controllers/deliveryController')

router
.route("/deliveries")
.post((req, res) => deliveryController.create(req, res));

router
.route("/deliveries")
.get((req, res) => deliveryController.getAll(req, res));


module.exports = router

