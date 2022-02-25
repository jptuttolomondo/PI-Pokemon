import axios from 'axios' 


export const CargarPokemones = () =>{
    //const dispatch =useDispatch()
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
return async (dispatch)=>{
try{
const salida= await axios(`http://localhost:3001/type`,
{//nombre
 })

return dispatch({type:'NUEVO_TIPO',payload:salida.data.NuevoTipo})

}
catch(error){
console.log(error)
}

}
}




export const TodosTipos= () =>{
    return async (dispatch) =>{
        try {
            const salida = await axios.get(`http://localhost:3001/type`)
         salida.sort()
         console.log(salida.data.name)

        return dispatch({type:'CARGAR_TODOS_TIPOS', payload: salida.data.name})
      
        } catch (error) {
            console.log(error)
        }     

    }
}





export const filtroPorTipo = (payload) =>( {type: 'FILTRO_POR_TIPO', payload } )



export const OrdenarPorTipoAsc = () =>( {type: 'ORDENAR_POR_TIPO_ASC'} )

export const OrdenarPorTipoDesc = () =>( {type: 'ORDENAR_POR_TIPO_DESC'} )

export const OrdenarPorLetraAsc = () =>(  {type:'ORDENAR_POR_LETRA_ASC' } )

export const OrdenarPorLetraDesc = () =>( {type:'ORDENAR_POR_LETRA_DESC' } )
