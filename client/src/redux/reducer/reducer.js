
const Estado = {
    pokemonesInicial : [],
    
  }


export const Reducer = (state=Estado,action)=>{

switch(action.type){

case 'CARGAR_POKEMONES':return{
    // ...state,paisesInicial:action.payload,
    //                       copiaDePaises:action.payload
                        }

case'POKEMONES_POR_ID':return{
   //...state,detallePaisInicial:action.payload
}

case'POKEMONES_POR_NOMBRE':return{
   //  ...state, detallePaisInicial:action.payload
     }



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
   // ...state,todasActividadesInicial:action.payload
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


case 'ORDENAR_POR_LETRA_ASC':return{
    // if(state.paisesActivos.length<=0) return{
    //...state,paisesActivos:state.paisesInicial.sort((a, b) => (
//   a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0)
// )}
// else                            
// return {
//   ...state,
// paisesActivos: state.paisesActivos.sort((a, b) => (
//    a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0)
//  )

}

 case 'ORDENAR_POR_LETRA_DESC':return{
     //if(state.paisesActivos.length<=0) return{
     //...state,paisesActivos:state.paisesInicial.sort((a, b) => (
//   a.nombre < b.nombre ? 1 : a.nombre > b.nombre ? -1 : 0)
// )}
//   return {...state,

//   paisesActivos: state.paisesActivos.sort((a, b) => (
//     a.nombre < b.nombre ? 1 : a.nombre > b.nombre ? -1 : 0)
//   )
 
}

default: return {...state} 

}

}

