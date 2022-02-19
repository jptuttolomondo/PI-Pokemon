
const { default: axios } = require("axios");
const { Pokemon, Type } = require('../db');


async function getApiType() {
    //trayendo info de la api
    const dataApi = await axios.get('https://pokeapi.co/api/v2/type'); 
    console.log(dataApi.data.results)
    for(let i=0;i<dataApi.data.results.length;i++){
        await Type.create({name:dataApi.data.results[i].name})
    }
return Type.findAll()

 
//     const typesGet=dataApi.data.results.map(el=>{
//            // return axios.get(el.url)})
//             //const typesRender=await Promise.all(typesGet);
//  //   console.log(pokemonesRender)
   
//    const typesMapeoInfo=typesRender.map(el=>{

//                       return ( 
//                     {id:el.data.id,
//                      name: el.data.name,
                      
//                     // tipos: el.data.types.map((e)=>e.type.name)
//                     })
//                   })
//                 //console.log(typesMapeoInfo)
//                return typesMapeoInfo   
   
}

module.exports= {getApiType}
