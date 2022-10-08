const express = require('express');
const router = express.Router();
const {register, getList, getSchoolById, updateSchool} = require('../controllers/school');
const { protect } = require('../middleware/auth');

router.route('/register').post(register);
router.route('/getList').get(protect,getList);
router.route('/getSchoolById').get(protect,getSchoolById);
router.route('/updateSchool').post(protect,updateSchool);


module.exports = router;
