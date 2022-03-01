import axios from 'axios' 


export const CargarPokemones = () =>{
  
    return async (dispatch) =>{
        const salida = await axios('http://localhost:3001/pokemons/') 
        console.log(salida.data)
        return dispatch({type:'CARGAR_POKEMONES', payload: salida.data})
    }
}

 

export const PokemonsById= (id) =>{

    return async (dispatch) =>{
        try {
            const salida = await axios(`http://localhost:3001/pokemons/${id}`)
                
            return dispatch({type:'POKEMONES_POR_ID', payload: salida.data})
        } catch (error) {
            console.log(error)
        }
        

    }

}





export function postPokeCreado (payload){
return async function (dispatch){
const response= await axios.post(`http://localhost:3001/pokemons`,payload)
console.log(response)
return response

}
}

export const PokemonesPorNombre= (name) =>{//cambiar por buscarPoekmones
    return async (dispatch) =>{
        try {
            const salida = await axios(`http://localhost:3001/pokemons?name=${name}`)
        
        return dispatch({type:'POKEMONES_POR_NOMBRE', payload: salida.data})
        
        } catch (error) {
            
            return alert('Ingresar un nombre válido de un pokemon')
        }     

    }
}




export const NuevoTipo = () =>{
// return async (dispatch)=>{
// try{
// const salida= await axios(`localhost:3001/type`
//  })

// return dispatch({type:'NUEVO_TIPO',payload:salida.data.NuevoTipo})

// }
// catch(error){
// console.log(error)
// }

// }
}




export const TodosTipos= () =>{
    return async (dispatch) =>{
        try {
            const salida = await axios.get(`http://localhost:3001/type`)
         //salida.sort()
         console.log(salida.data)

        return dispatch({type:'CARGAR_TODOS_TIPOS', payload: salida.data})
      
        } catch (error) {
            console.log(error)
        }     

    }
}





export const filtroPorTipo = (payload) => (   {type: 'FILTRO_POR_TIPO', payload } )



export const OrdenarPorFuerzaAsc = () =>( {type: 'ORDENAR_POR_FUERZA_ASC'} )

export const OrdenarPorFuerzaDesc = () =>( {type: 'ORDENAR_POR_FUERZA_DESC'} )

export function OrdenarPorNombre  (payload) { return {type:'ORDENAR_POR_NOMBRE', payload} }

export const OrdenarPorLetraDesc = () =>( {type:'ORDENAR_POR_LETRA_DESC' } )


