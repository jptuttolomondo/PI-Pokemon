const express= require('express')
//const { salida } = require('express')
const axios=require('axios')
const {Pokemon, Type} = require('../db')
const { Op } = require('sequelize')
const { ApiAccess } = require('../helpers/AccesoApi')
const {getPokemonData,getApiInfo,getDbInfo}=require('../helpers/nuevoApiAccess')

const routesPoke  = express.Router()



const getAllPokemons= routesPoke.get('/pokemons',async (req,res)=>{

  const name = req.query.name
    const detailsPokeDb = await Pokemon.findAll({
      attributes: ["name", "id", "sprites", "life"],
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    })
  
    const infoAPI = await getApiInfo()
    const allPokes = [...infoAPI, ...detailsPokeDb]
  
    if (name) {
      let pokeName = allPokes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
      pokeName.length 
        ? res.status(200).send(pokeName)
        : res.status(404).send({message: "Pokemon no encontrado"})
    }else{
      res.send(allPokes)
    }
 
})









const getPokemonsByName=routesPoke.get( `/pokemons/`,async (req,res,next)=>{

})


const getPokemonsById=routesPoke.get( `/pokemons/:id`,async (req,res)=>{

    const {id} = req.params
    console.log('id por params :',id)
    if (!id.includes("_api")) { 
      const pokeDB = await getDbInfo()
     // console.log(pokeDB)
      const findPokeDB = pokeDB.find(el => el.id === id)
      if (findPokeDB) {
        return res.status(200).send(findPokeDB)
      }
      res.status(404).send("El pokemon no existe")
    }
  
    let idApi = id.split("_")[0]

  
   if (id.includes("_api")){
      const pokeAPI = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idApi}`);
    
     console.log('idApi :',idApi)
      const pokeDetailsAPI = {
        id:pokeAPI.data.id,
        hp: pokeAPI.data.stats[0].base_stat,
        attack: pokeAPI.data.stats[1].base_stat,
        defense: pokeAPI.data.stats[2].base_stat,
        speed: pokeAPI.data.stats[5].base_stat,
        height: pokeAPI.data.height,
        weight: pokeAPI.data.weight,
      }
     
        return res.status(200).send(pokeDetailsAPI)
      
    }


res.status(404).send("El pokemon no existe....")

 })
 


const postnewPokemon= routesPoke.post('/pokemons', async (req,res)=>{
const { id, name, life,strenght, fender,  speed, height, wheight, sprites,tipos} = req.body
console.log('nomber : ',name)
console.log('types  :',tipos)
   const [newPoke, created] = await Pokemon.findOrCreate({
      where: {
     // id, 
      name, life, strenght,  fender, speed, height, wheight, sprites
      },
    })

   console.log('newPoke :',newPoke)
if(!created) res.send('el pokemon ya existe')
let typePokemon= await Type.findAll(
  {where:
  {name:tipos}
  }
)
await newPoke.setTypes(typePokemon)
res.status(200).send('pokemon creado corectamente')

 })



module.exports= {
    getAllPokemons,
    getPokemonsById,
    getPokemonsByName,
    postnewPokemon
}








  //      const {name}= req.query;
    //      console.log(name)
    //  if(name){
    //       try{ console.log('hola1')
    //             if(!name){ console.log('hola2')
    //            const arrPokemonsDb=await getDbInfo();
    //             const arrPokemons=await getApiInfo();
    //             console.log('hola3')
    //             return res.send([...arrPokemonsDb,...arrPokemons]);
    //         }
                       
    //        else{ console.log('hola4')
    //         //si llego un name  por query
    //         const nameLower=name.trim().toLowerCase(); 
    //         console.log(nameLower)
    //          //verifico que este en la base de datos
    //             let pokemonDB=await Pokemon.findOne({
    //                  where:{
    //                 name:nameLower,
    //                 },
    //                  include:Tipo,
    //                 });
    //                 console.log('hola61')
    //                 console.log('pokemonDB: ',pokemonDB)
    //                  if(pokemonDB) {  console.log('hola63')
    //                  pokemonDB={...pokemonDB.dataValues,tipo:getTiposNames(pokemonDB.dataValues) };
    //               console.log('hola62')
    //               console.log(pokemonDB)
    //               console.log('hola6')
    //             return res.send(pokemonDB);
    //                    }
    //                   }
    //             //si no esta en la base de datos busco en la api
    //                console.log('hola7')
    //             const pokemonAPI=await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameLower}`);
    //             const pokeNombreporQuery=pokemonAPI.data
    //             console.log('hola8')
    //             console.log(pokeNombreporQuery)
    //           //   //pokemonAPI=getPokemonData(pokemonAPI);
    //           //  const pokemonAPIMostrar= pokemonAPI.map(el=>{
    //           //     return(
    //           //     {
    //           //      name: el.data.name,
    //           //         strength: el.data.stats[1].base_stat,
    //           //         defense:el.data.stats[2].base_stat,
    //           //         life:el.data.stats[0].base_stat,
    //           //         speed:el.data.stats[5].base_stat, 
    //           //         sprites: el.data.sprites.front_default,
    //           //         height:el.data.height,
    //           //         weight:el.data.weight,
    //           //      tipos: el.data.types.map((e)=>e.type.name)
    //           //     })
    //           //   })
                
    //            return res.send(pokemonAPIMostrar);
    //            }
        
    //    catch(error){res.status(400).send(error)}
    //       }
   
        
    //  else{
    //        const pokemonesFront=await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0`);
    //         const pokemones=pokemonesFront.data.results.map(el=>{
    //             return axios.get(el.url);
    //         });
        
    //         const pokemonesRender=await Promise.all(pokemones);
    //        // const pokemonesRender2= getPokemonData(pokemonesRender)
    //        const pokemonesDetail= pokemonesRender.map(el=>{
    //             return (
    //             {
    //              name: el.data.name,
    //                 strength: el.data.stats[1].base_stat,
    //                 defense:el.data.stats[2].base_stat,
    //                 life:el.data.stats[0].base_stat,
    //                 speed:el.data.stats[5].base_stat,
    //                 sprites: el.data.sprites.front_default,
    //                 height:el.data.height,
    //                 weight:el.data.weight,
    //              tipos: el.data.types.map((e)=>e.type.name)
    //             })
    //           })
            
    //         res.send(pokemonesDetail);
        
    //  }
    