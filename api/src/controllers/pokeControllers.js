const express= require('express')
//const { salida } = require('express')

//const {Pokemon, Tipo} = require('../db')
//const { Op } = require('sequelize')
//const { ApiAccess } = require('../helpers/AccesoApi')
//const express=require('express')
const routesPoke  = express.Router()

 
// exports.getAllPokemons=('/pokemons',(req,res,next)=>{
//     res.send('get all pokemons')
//     next()
// })

const getAllPokemons=routesPoke.get('/pokemons',(req,res,next)=>{
    res.send('get all pokemons...')
    next()
})
let idPokemon=1
const getPokemonsById=routesPoke.get( `/pokemons/${idPokemon}`,(req,res,next)=>{
   res.send('get pokemon by id')
   next()
})

let name='prueba'
const getPokeminsByName=routesPoke.get(`/pokemons?name=${name}`,(req,res,next)=>{ //falta verificar este
    res.send('get pokemons by name')
    next()
})



const postnewPokemon=routesPoke.post('/pokemons',(req,res,next)=>{
    res.send('post new pokemons')
    next()
})


module.exports= {getAllPokemons,getPokemonsById,getPokeminsByName,postnewPokemon}