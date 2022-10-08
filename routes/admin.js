const express = require('express');
const router = express.Router();
const {getList, deleteAdmin, getAdminById,updateAdmin} = require('../controllers/admin');
const { protect } = require('../middleware/auth')

router.route('/getList').get(protect,getList);
router.route('/delete').post(protect,deleteAdmin);
router.route('/getAdminById').get(protect,getAdminById);
router.route('/updateAdmin').post(protect,updateAdmin);


module.exports = router;
