const { default: axios } = require("axios");
//const Pokemon = require("../models/Pokemon");
const { Pokemon, Type } = require('../db');


const getDbInfo= async ()=>{

    //trayecdo desde la bd
 
    return await Pokemon.findAll({
        include:{
            model:Type,//tabla de Tipos
            attributes:['name'],//obtenemos datosde la tabla tipos,
            through:{
                attributes:[],//comprobacion
            },

        }
    });

}



async function getApiInfo() {
    //trayendo info de la api
    const dataApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40'); //limitando a 40 pokemon
    const pokemones=dataApi.data.results.map(el=>{
            return axios.get(el.url)})
            const pokemonesRender=await Promise.all(pokemones);
 //   console.log(pokemonesRender)
    //const pokemones = dataApi.data.results; //creando un array con los resultados de la api
   const pokemonesMapeoInfo=pokemonesRender.map(el=>{

                      return ( 
                    {id:el.data.id,
                     name: el.data.name, 
                       strength: el.data.stats[1].base_stat,
                        defense:el.data.stats[2].base_stat,
                        life:el.data.stats[0].base_stat,
                        speed:el.data.stats[5].base_stat,
                        sprites: el.data.sprites.front_default,
                       height:el.data.height,
                         weight:el.data.weight,
                     tipos: el.data.types.map((e)=>e.type.name)
                    })
                  })
            
               return pokemonesMapeoInfo   
   
}


function getTiposNames (pokemon) {
    pokemon = pokemon.types.map((e) => e.dataValues.name);
    return pokemon;
}


function getPokemonData(auxD){
     
return{
id: auxD.data.id,
name:auxD.data.name,
hp:auxD.data.stats[0].base_stat,
strength:auxD.data.stats[1].base_stat,
defense:auxD.data.stats[2].base_stat,
speed:auxD.data.stat[5].base_stat,
height:auxD.data.height,
weight:auxD.data.weight,
sprites:auxD.data.sprites.front_default,
tipos:auxD.data.types.map((e)=>e.type.name)
};

}


module.exports={getPokemonData,getTiposNames,getApiInfo,getDbInfo};


