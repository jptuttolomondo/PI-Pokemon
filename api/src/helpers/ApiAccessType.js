
const  axios  = require("axios");
const { Type } = require('../db');


async function getApiType() {
    //trayendo info de la api
    const dataApi = await axios.get('https://pokeapi.co/api/v2/type'); 
   // console.log(dataApi.data.results)
    for(let i=0;i<dataApi.data.results.length;i++){
        await Type.create({name:dataApi.data.results[i].name})
    }
return Type.findAll()


}

module.exports= {getApiType}
