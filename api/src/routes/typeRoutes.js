const express= require('express')
const router=express.Router()
const {getAllTypesPokemons}=  require('../controllers/typeControllers')
router.get('/type', getAllTypesPokemons)

module.exports=router

