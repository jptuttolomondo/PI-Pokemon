

const  axios  = require("axios");
const { error } = require("console");
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
    const dataApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1');
    console.log(dataApi.data.results) //limitando a 40 pokemon

   const pokemones=dataApi.data.results.map(el=>{
        console.log(el.url)
           return axios.get(el.url)})
 //console.log(pokemones)
            
  // console.log(pokemonesRender)
//    let arrayPokesResp=[]
//    for (let i=0;i<dataApi.data.results.length;i++){
//        const apiResUrl=axios.get(`${dataApi.data.results[i].url}`)
       
//        arrayPokesResp.push(apiResUrl)
//    }
  // console.log('console del for',arrayPokesResp)
        const pokemonesRender=await Promise.all(pokemones);
//console.log(arrayPokesResp)
          
    //const pokemones = dataApi.data.results; //creando un array con los resultados de la api
   const pokemonesMapeoInfo=pokemonesRender.map(el=>{

                      return ( 
                    {id:el.data.id,
                     name: el.data.name, 
                       strength: el.data.stats[1].base_stat,
                        defense:el.data.stats[2].base_stat,
                        life:el.data.stats[0].base_stat,
                        speed:el.data.stats[5].base_stat,
                        sprites: el.data.sprites.other.dream_world.front_default,
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











// const  axios = require("axios");
// //const Pokemon = require("../models/Pokemon");
// const { Pokemon, Type } = require('../db');


// const getDbInfo= async ()=>{

//     //trayecdo desde la bd
 
//     return await Pokemon.findAll({
//         include:{
//             model:Type,//tabla de Tipos
//             attributes:['name'],//obtenemos datosde la tabla tipos,
//             through:{
//                 attributes:[],//comprobacion
//             },

//         }
//     });

// }



// async function getApiInfo() {
//     //trayendo info de la api
//     const dataApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40'); //limitando a 40 pokemon

   
//     // const infoApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${random()}&limit=40`);
//     //     let pokemonUrl = infoApi.data.results.map(e => {
//     //         return axios.get(e.url)
//     //     })


//     //console.log(dataApi)
//     const pokemones=dataApi.data.results.map(el=>{
//        // console.log(el.url)
//             return axios.get(el.url)});

//     console.log(pokemones)
//  const pokemonesRender= await Promise.all(pokemones);
//   // console.log(pokemonesRender)
//    // const pokemones = dataApi.data.results; //creando un array con los resultados de la api
//    const pokemonesMapeoInfo=pokemonesRender.map(el=>{

//                       return {
//                         id:el.data.id,
//                      name: el.data.name, 
//                        strength: el.data.stats[1].base_stat,
//                         defense:el.data.stats[2].base_stat,
//                         life:el.data.stats[0].base_stat,
//                         speed:el.data.stats[5].base_stat,
//                         sprites: el.data.sprites.other.dream_world.front_default,
//                        height:el.data.height,
//                          weight:el.data.weight,
//                      tipos: el.data.types.map((e)=>e.type.name)
//                     }
//                  }
//                   )
            
//  return pokemonesMapeoInfo   
   
// }




// function getTiposNames (pokemon) {
//     pokemon = pokemon.types.map((e) => e.dataValues.name);
//     return pokemon;
// }


// function getPokemonData(auxD){
     
// return{
// id: auxD.data.id,
// name:auxD.data.name,
// hp:auxD.data.stats[0].base_stat,
// strength:auxD.data.stats[1].base_stat,
// defense:auxD.data.stats[2].base_stat,
// speed:auxD.data.stat[5].base_stat,
// height:auxD.data.height,
// weight:auxD.data.weight,
// sprites:auxD.data.sprites.front_default,
// tipos:auxD.data.types.map((e)=>e.type.name)
// };

// }


// async function getFromApi(value){
//     const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
//     const result = {
//         id: pokemonApi.data.id,
//         name: pokemonApi.data.name,             
//         image: pokemonApi.data.sprites.other.dream_world.front_default,
//         hp: pokemonApi.data.stats[0].base_stat,
//         str: pokemonApi.data.stats[1].base_stat,
//         def: pokemonApi.data.stats[2].base_stat,
//         spd: pokemonApi.data.stats[5].base_stat,
//         height: pokemonApi.data.height,
//         weight: pokemonApi.data.weight,
//         types: pokemonApi.data.types.map(e => e.type.name)        
//     }
//     return result;
// }



// function loadFromDb(value){ 
//     const result = {
//         id: value.id,
//         name: value.name,             
//         image: value.image,
//         hp: value.hp,
//         str: value.str,
//         def: value.def,
//         spd: value.spd,
//         height: value.height,
//         weight: value.weight,
//         types: value.types.map(e => e.name)        
//     }  
//     return result;
// }




// module.exports={getPokemonData,getTiposNames,getApiInfo,getDbInfo,getFromApi,loadFromDb};


