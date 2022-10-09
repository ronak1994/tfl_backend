const express = require('express');
const router = express.Router();
const {register, getList, getSchoolById, updateSchool, disableSchool, 
    enableSchool, approveSchool, disapproveSchool} = require('../controllers/school');
const { protect } = require('../middleware/auth');

router.route('/register').post(register);
router.route('/getList').get(protect,getList);
router.route('/getSchoolById').get(protect,getSchoolById);
router.route('/updateSchool').post(protect,updateSchool);
router.route('/disableSchool').post(protect,disableSchool);
router.route('/enableSchool').post(protect,enableSchool);
router.route('/approveSchool').post(protect,approveSchool);
router.route('/disapproveSchool').post(protect,disapproveSchool);


module.exports = router;
