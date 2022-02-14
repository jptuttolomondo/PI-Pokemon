const express= require('express')
//const { salida } = require('express')
//const {Pokemon, Tipo} = require('../db')
//const { Op } = require('sequelize')
//const { ApiAccess } = require('../helpers/AccesoApi')
const routesPoke  = express.Router()


routesPoke.get('/pokemons',(req,res,next)=>{
    res.send('get all pokemons')
    next()
})
let idPokemon=1
routesPoke.get( `/pokemons/${idPokemon}`,(req,res,next)=>{
   res.send('get pokemon by id')
   next()
})

let name='prueba'
routesPoke.get(`/pokemons?name=${name}`,(req,res,next)=>{ //falta verificar este
    res.send('get pokemons by name')
    next()
})



routesPoke.post('/pokemons',(req,res,next)=>{
    res.send('post new pokemons')
    next()
})


module.exports= routesPoke