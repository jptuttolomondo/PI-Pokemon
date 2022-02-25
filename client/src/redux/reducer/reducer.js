
const Estado = {
  pokemonesInicial : [],
  detalleDePokemones :[],
  pokemonBuscado :[],
  PokemonOrdenado :[],
  copiaDePokemonesInicial:[],
  tiposDePokemones:[],
}


export const Reducer = (state=Estado,action)=>{

switch(action.type){

case 'CARGAR_POKEMONES':return{
   ...state,pokemonesInicial: action.payload,copiaDePokemonesInicial: action.payload,
                    
                      }

case'POKEMONES_POR_ID':return {...state,detalleDePokemones:action.payload}


case'POKEMONES_POR_NOMBRE':return{ ...state, pokemonBuscado:action.payload}



case 'FILTRO_POR_TIPO':return{ 
//     ...state, 
//   paisesActivos:state.paisesInicial.filter((c)=>
//   typeof(c.continente)==='string' ? c.continente.includes(action.payload) 
//                                   : c.continente.includes(action.payload))
                              }





case'NUEVO_TIPO':return{
//     ...state,actividadesInicial:action.payload,
//   todasActividadesInicial: state.todasActividadesInicial.concat(action.payload)
}

case 'CARGAR_TODOS_TIPOS': return{
 ...state,tiposDePokemones:action.payload
}



case 'ORDENAR_POR_TIPO_ASC':  

return {//...state,paisesActivos: state.paisesActivos.sort((a, b) => (
// //   a.poblacion > b.poblacion ? 1 : a.poblacion < b.poblacion ? -1 : 0)
// )
}



case 'ORDENAR_POR_TIPO_DESC'://if(state.copiaDePaises.length<=0) 
return{
//  ...state,paisesActivos:state.paisesInicial.sort((a, b) => (
//   a.poblacion < b.poblacion ? 1 : a.poblacion > b.poblacion ? -1 : 0)
// )
//}
                           
//else
//return {
//   ...state,
// paisesActivos: state.paisesInicial.sort((a, b) => (
//    a.poblacion < b.poblacion ? 1 : a.poblacion > b.poblacion ? -1 : 0)
//  )

}


case 'ORDENAR_POR_LETRA_ASC':
  if(state.PokemonOrdenado.length<=0) return{
  ...state, PokemonOrdenado: state.copiaDePokemonesInicial.sort((a, b) => (
a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
)}
else                            
return {
...state,PokemonOrdenado: state.PokemonOrdenado.sort((a, b) => (
 a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
)

}

case 'ORDENAR_POR_LETRA_DESC':
   if(state.PokemonOrdenado.length<=0) return{
   ...state,PokemonOrdenado:state.copiaDePokemonesInicial.sort((a, b) => (
  a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
)}
else
  return {...state,PokemonOrdenado: state.copiaDePokemonesInicial.sort((a, b) => (
    a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
  )

}

default: return {...state} 

}

}

