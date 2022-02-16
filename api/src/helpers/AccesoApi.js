const axios = require('axios');
const {Pokemon} = require('../db.js')


const ApiAccess= async()=>{
 try{
  const salida= await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0`)
//console.log(salida)
  const pokemonesAPI= await salida.data.results.map(e=>{return axios.get(e.url) })

const poke1= await Promise.all(pokemonesAPI)


     const pokes = salida.data.results.map(resultado => { return{ name: resultado.name} })
     console.log(pokes)
    
     const poke2=poke1.data.map(resultado=>{return {height:resultado.height}})    
         console.log(poke2)
         }
  catch(error){console.log(error)  }
  }
  



  function getPokemonData(auxD){
    return{
    id: auxD.data.id,
    name:auxD.data.name,
    hp:auxD.data.stats[0].base_stat,
    strength:auxD.data.stats[1].base_stat,
    defense:auxD.data.stats[1].base_stat,
    speed:auxD.data.stat[5].base_stat,
    height:auxD.data.height,
    weight:auxD.data.weight,
    sprites:auxD.data.sprites.front_default,
    tipos:auxD.data.types.map((e)=>e.type.name)
    };
  }
  module.exports = {
   ApiAccess
}