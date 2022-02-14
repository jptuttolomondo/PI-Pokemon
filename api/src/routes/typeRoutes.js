const express= require('express')
//const {Router} = require('express')
const router=express.Router()
const {getAllTypes}=  require('../controllers/typeControllers')
//const router=Router()
router.get('/tipos', getAllTypes)

module.exports=router

