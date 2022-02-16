const express=require('express')
const router = express.Router();  

const pokemonRoutes=require('./pokemonRoutes')
const typeRoutes=require('./typeRoutes') 

router.use('/',pokemonRoutes)
router.use('/',typeRoutes)
 
module.exports = router
