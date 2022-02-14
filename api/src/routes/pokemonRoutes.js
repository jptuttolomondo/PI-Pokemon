const express= require('express')
const routesPokemon  = express.Router()

const {getAllPokemons,getPokemonsById,getPokeminsByName,postnewPokemon}=require('../controllers/pokeControllers')
routesPokemon.get('/pokemons',getAllPokemons)
let idPokemon=1
routesPokemon.get(`/pokemons/${idPokemon}`,getPokemonsById)
let name='prueba'
routesPokemon.get(`/pokemons?name=${name}`,getPokeminsByName)
routesPokemon.post('/pokemons/',postnewPokemon)

module.exports= routesPokemon