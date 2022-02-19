const express= require('express')
const routesPokemon  = express.Router()

 const { 
     getAllPokemons, 
     getPokemonsById,
     getPokemonsByName,
     postnewPokemon
    }=require('../controllers/pokeControllers')
routesPokemon.get('/pokemons',getAllPokemons)
let idPokemon=1
routesPokemon.get(`/pokemons/:id`,getPokemonsById)
let name='prueba'
routesPokemon.get(`/pokemons?name=${name}`,getPokemonsByName)
routesPokemon.post('/pokemons/',postnewPokemon)

module.exports= routesPokemon