const express= require('express')
const router=express.Router()
const {getAllTypes}=  require('../controllers/typeControllers')
router.get('/tipos', getAllTypes)

module.exports=router

