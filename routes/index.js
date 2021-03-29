const express = require('express')
const doHit = require('../controller')
const router = express.Router()

router.get("/", doHit)

module.exports = router