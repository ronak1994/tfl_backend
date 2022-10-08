const express = require('express');
const router = express.Router();
const {private} = require('../controllers/private');
const { protect } = require('../middleware/auth')

router.route('/').get(protect,private);

module.exports = router;
