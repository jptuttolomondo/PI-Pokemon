
const axios = require('axios');
const {Pokemon} = require('../db.js')


const ApiAccess= async()=>{
    try{
  const salida= await axios.get("https://pokeapi.co/api/v2/pokemon")
    
    const pokes = salida.data.map(res => {
            return{
                        id: results,
                        name: results.name,
                        url: results.url
                       }
                        console.log(salida)
                    })
                  if(!(await Pokemon.findByPk('1'))) {await Pokemon.bulkCreate(pokes)}
    
    }
    catch(error){console.log(error)  }
  }
  

  module.exports = {
   ApiAccess
}