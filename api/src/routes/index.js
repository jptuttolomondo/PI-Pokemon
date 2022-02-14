const { Router } = require('express');
const express=require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeRoutes= require('../controllers/pokeControllers')
const pokeTipos= require('../controllers/TipoControllers')
//const pokemonRoutes=require('pokemonRoutes')
//const typeRoutes=require('TypeRoutes')
const router = express.Router();  



router.use('/',pokeRoutes)//pokemonRoutes
router.use('/',pokeTipos)//typeRoutes


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 

module.exports = router
