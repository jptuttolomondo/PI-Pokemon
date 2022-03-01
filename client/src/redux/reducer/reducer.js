
const Estado = {
  pokemonesInicial : [],
  detalleDePokemones :[],
  pokemonBuscado :[],
  pokemonOrdenado:[],

  OrdenadoPorFuerzaAsc:[],

  copiaDePokemonesInicial:[],
  tiposDePokemones:[],
  pokemonFiltrado:[],
  pokemonGuardado:[],
}


export const Reducer = (state=Estado,action)=>{

switch(action.type){

case 'CARGAR_POKEMONES':return{
   ...state,pokemonesInicial: action.payload,copiaDePokemonesInicial: action.payload,
                          }

case'POKEMONES_POR_ID':return {...state,detalleDePokemones:action.payload}


case'POKEMONES_POR_NOMBRE':return{ ...state, pokemonBuscado:action.payload}

case'POST_POKEMON':return{...state,}



case'GUARDAR_NUEVO_POKEMON':return {...state,pokemonGuardado: action.payload }



case 'FILTRO_POR_TIPO': console.log(action.payload)
   let  pokemonesParaFiltrar=state.copiaDePokemonesInicial
let YaFiltrados=pokemonesParaFiltrar.filter(e=>e.type.includes(action.payload))
console.log(YaFiltrados)
return{  ...state, 
  pokemonFiltrado:YaFiltrados.length>0? YaFiltrados :alert('no hay pokemones con el tipo seleccionado')?pokemonesParaFiltrar:pokemonesParaFiltrar
 
                              }

/*  let pokemonesParaFiltrar=state.copiaDePokemonesInicial
  let YaFiltrados=pokemonesParaFiltrar.filter(e=>e.type===action.payload)

return{ //verificar esto
    ...state, 
  pokemonFiltrado:YaFiltrados.length>0? YaFiltrados :alert('no hay pokemones con el tipo seleccionado')
      //original    
   ...state, 
  pokemonFiltrado:state.copiaDePokemonesInicial.filter((c)=>
  typeof(c.type)==='string' ? c.type.includes(action.payload) 
                                  : c.type.includes(action.payload))
                            

}*/



case'NUEVO_TIPO':return{
//     ...state,actividadesInicial:action.payload,
//   todasActividadesInicial: state.todasActividadesInicial.concat(action.payload)
}

case 'CARGAR_TODOS_TIPOS': return{
 ...state,tiposDePokemones:action.payload
}



case 'ORDENAR_POR_FUERZA_ASC':   if(state.OrdenadoPorFuerzaAsc.length<=0) return{
  ...state, OrdenadoPorFuerzaAsc: state.copiaDePokemonesInicial.sort((a, b) => (
a.attack> b.attack ? 1 : a.attack < b.attack ? -1 : 0)
)}
else                            
return {
...state,OrdenadoPorFuerzaAsc: state.OrdenadoPorFuerzaAsc.sort((a, b) => (
 a.attack > b.attack ? 1 : a.attack < b.attack ? -1 : 0)
)}






case 'ORDENAR_POR_NOMBRE': let aux =action.payload==='a-z'? state.pokemonesInicial.sort(
function(a, b){
   
   
    if (a.name > b.name) {
      return 1;
  }
  if (b.name > a.name) {
      return -1;
  }
   return 0;
  })
   :
state.pokemonesInicial.sort (function(a,b){
  if (a.name > b.name) {
      return -1;
  }
  if (b.name > a.name) {
      return 1;
  }
  })
  return {...state,pokemonOrdenado:aux}
      

  
                         


/* if(state.PokemonOrdenadoAsc.length<=0) return{
  ...state, PokemonOrdenadoAsc: state.copiaDePokemonesInicial.sort((a, b) => (
a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
)}
else                            
return {
...state,PokemonOrdenadoAsc: state.PokemonOrdenadoAsc.sort((a, b) => (
 a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
)

}*/


// case 'ORDENAR_POR_LETRA_DESC':
//    if(state.PokemonOrdenadoDesc.length<=0) return{
//    ...state,PokemonOrdenadoDesc:state.copiaDePokemonesInicial.sort((a, b) => (
//   a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
// )}
// else
//   return {...state,PokemonOrdenadoDesc: state.copiaDePokemonesInicial.sort((a, b) => (
//     a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
//   )

// }

default: return {...state} 

}

}

