//const { salida } = require('express')
 const express= require('express')
const {Pokemon,Type} = require('../db')
 const { Op } = require('sequelize')
 //const { ApiAccess } = require('../helpers/AccesoApi')
 const {getApiType}=require('../helpers/ApiAccessType')
const routesTipo=express.Router()

const getAllTypesPokemons=routesTipo.get('/type',async (req,res,next)=>{
   
  const name = req.query.name
    
          const detailsTypeDb = await Type.findAll({
            attributes: ["name", "id"] 
         })
         if(detailsTypeDb.length===20) { 
                                        res.send(detailsTypeDb)}
        else {const infoAPI = await getApiType()
        //console.log(infoAPI)

          const allTypes = [...infoAPI, ...detailsTypeDb]
          if (name) {
            let tipo = allTypes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            console.log('tipo:!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!',tipo)
            tipo.length 
              ? res.status(200).send(tipo)
              : res.status(404).send({message: "tipo no encontrado"})
          }
          else{   console.log(allTypes)
            res.send(allTypes)  }
        }
})

     


module.exports={getAllTypesPokemons}

 /* const name = req.query.name
    
          const detailsTypeDb = await Type.findAll({
            attributes: ["name", "id"] 
         })
         if(detailsTypeDb.length===20) { 
                                        res.send(detailsTypeDb)}
        else {const infoAPI = await getApiType()
        //console.log(infoAPI)

          const allTypes = [...infoAPI, ...detailsTypeDb]
          if (name) {
            let tipo = allTypes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            console.log('tipo:!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!',tipo)
            tipo.length 
              ? res.status(200).send(tipo)
              : res.status(404).send({message: "tipo no encontrado"})
          }
          else{   console.log(allTypes)
            res.send(allTypes)  }
        }
})*/