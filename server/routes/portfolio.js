const express = require('express')
const router = express.Router()

const pages_url = require('../settings')

router.get('/', (req, res) => {

    res.render(pages_url + '/portfolio.ejs')
})




module.exports = router