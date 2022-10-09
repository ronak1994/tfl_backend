const express = require('express');
const router = express.Router();
const {register,getList,getTeacherById, updateTeacher} = require('../controllers/teacher');
const { protect } = require('../middleware/auth');

router.route('/register').post(register);
router.route('/getList').get(protect,getList);
router.route('/getTeacherById').get(protect,getTeacherById);
router.route('/updateTeacher').post(protect,updateTeacher);
//router.route('/approveTeacher').post(protect,approveTeacher);
//router.route('/disapproveTeacher').post(protect,disapproveTeacher);


module.exports = router;
