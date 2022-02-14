//const { salida } = require('express')
 const express= require('express')
// const {Actividad, Pais} = require('../db')
// const { Op } = require('sequelize')
// const { ApiAccess } = require('../helpers/AccesoApi')

const routesTipo=express.Router()

const getAllTypes=routesTipo.get('/tipos',(req,res,next)=>{
    res.send('get all pokemons types')
    next()
})

module.exports={getAllTypes}