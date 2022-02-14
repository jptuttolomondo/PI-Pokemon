const express=require('express')
const routerTipo = express.Router();  
//const { Router, response } = require('express');
//const router=Router()

const pokemonRoutes=require('./pokemonRoutes')
const typeRoutes=require('./typeRoutes') 

routerTipo.use('/',pokemonRoutes)//pokemonRoutes
routerTipo.use('/',typeRoutes)//ok
 
module.exports = routerTipo
