const { default: axios } = require("axios");
const Pokemon = require("../models/Pokemon");



router.get('/',async(req,res)=>{
	const {name}= req.query;
if(name){
    try{
        if(!name){
            const arrPokemonsDb=await getDbInfo();
            const arrPokemons=await getApiInfo();
            return res.send([...arrPokemonsDb,...arrPokemons]);
        }
                   
         else{
        //si lelgo un name por query
        const nameLower=name.trim().lowerCase(); //como es trim???
         //verifico que este en la base de datos
            let pokemonDB=await Pokemon.findOne({
                 where:{
                name:nameLower,
                },
                 include:Type,
                });
        if(pokemonDB){
                 pokemonDB={...pokemonDB.dataValues,types:getTiposNames(pokemonDB.dataValues),
              };
            return res.send(pokemonDB);
            }
            //si no esta en la base de datos busco en la api
            let pokemonAPI=await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameLower}`);
            pokemonAPI=getPokemon(pokemonAPI);
            return res.send(pokemonAPI);



         }
    }
catch(error){res.status(400).send(error)}

}
else{
        const pokemonesFront=await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0`);
        const pokemones=pokemonesFront.data.results.map(el=>{
            return axios.get(el.url);
        });
        console.log(pokemones);
        const pokemonesRender=await Promise.all(pokemones);
        const pokemonesrender2= pokemonesRender.map(el=>{
            return (
            {
             name: el.data.name,
                strength: el.data.stats[1].base_stat,
                sprites: el.data.sprites.front_default,
             tipos: el.data.types.map((e)=>e.type.name)
            })

        });
        res.send(pokemonesRender2);

}

}     
);
     


router.get('/:id',async(req,res)=>{
const {id}=req.params;
try{
//primero vamos a buscar en la base de datos
let pokemonDB=await Pokemon.finfOne({where:{id},include:Type});
pokemonDB={...pokemonDB.dataValues,types:getTiposNames(pokemonDB)};
return res.send(pokemonDB);
}
catch(error){
try{
//si no esta en la base de datos, busco en la api
let pokemonAPI= await axios.get(`https://pokeapi.co/api/v2/pokemon/${ParseInt(id)}`);
pokemonAPI=getPokemonData(pokemonAPI);
return res.send(pokemonAPI);
}

catch(error){ return res.statur(400).send(error)}
}

});

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
tipos:auxD.data.tyoes.map((e)=>e.type.name)
};

}
module.exports={getPokemonData};