import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
//import { useEffect } from "react";
import "./searchBar.css"
//import { OrderBy,orderBy } from "../Orden";
import { OrdenarPorNombre } from "../actions/actions";
import { PokemonesPorNombre,CargarPokemones,


  filtroPorTipo,
  OrdenarPorFuerzaAsc,
  OrdenarPorFuerzaDesc,
  TodosTipos} from "../actions/actions";




export default function SearchBar({onSearch}) {

 const [pokemonName, setPokemonName] = useState(""); 
 const [tipo, setTipo] = useState("");
 const allTypes= useSelector(state=>state.tiposDePokemones)
 
 const pokeorden= useSelector(state=>state.pokemonOrdenado)
console.log(allTypes)
//filtros
 const dispatch = useDispatch();
useEffect(()=>{
dispatch(TodosTipos())

},[dispatch],allTypes)

 const [orden, setOrden] = useState(""); 


 const listaDeTipos= dispatch(TodosTipos);

 console.log(listaDeTipos)



 const OnclickOrdenar=(e)=>{

   setOrden(e);
console.log(orden)

 if (orden === "all") dispatch(CargarPokemones());
 else dispatch(OrdenarPorNombre(orden))

// useEffect(()=>{

//   dispatch(OrdenarPorNombre(orden))
//   },[dispatch],pokeorden)
  
  
 }


  const OnclickFiltrarPorTipo = (e) => {
setTipo(e)
//console.log(tipo)
if (e === "all") dispatch(CargarPokemones());
else { const listaDeTipos=TodosTipos()
  //console.log(listaDeTipos)
      dispatch(filtroPorTipo(tipo));}


   };
  
   function onClickHandler() {
    if(!pokemonName){
      return alert('Ingresar el nombre de un pokemon')}
      //validar que sea exacto!!
   dispatch(PokemonesPorNombre(pokemonName))
    
   }







  
  return (
      <div className="barra">
              <div className="enfila">
                   <form onSubmit={(e) => {
                     e.preventDefault();
                     }}>
                       <p> Buscar Pokemones por nombre..
                         <input
                          type="text"
                         placeholder="Nombre de Pokemon.."
                         value={pokemonName}
                            onChange={e => setPokemonName(e.target.value)}
                           />
                          <input type="submit" value="Buscar! " 
                          onClick={()=>onClickHandler()}/>
                          
                       </p>
                     
                     </form>
               </div>    
               <div className="enfila">     


                     <form onSubmit={(e) => {
                     e.preventDefault();
                                      
                       }}>

                <p> Filtrar Pokemones por tipo...
                        <select name='Tipo' onChange={(e) => setTipo(e.target.value)}  >
                        <option value="all">All</option>
                        {
                          allTypes.map(el=> {
                                return(<option key={el.name} value={el.name} > {el.name}</option>)

                          } )
                        }
                    
                       

                        </select>
                     
                          <input type="submit" value="Filtrar.." 
                       onClick={()=>OnclickFiltrarPorTipo()}/>
                  </p>
                </form>
                </div>
          

              <div className="enfila"> 
                <form onSubmit={(e) => {
                     e.preventDefault();
                    }}>
                         <p>Ordenar Pokemones por..
        <select name='orden'onChange={e => setOrden(e.target.value)}>
           <option value="all">Sin Orden</option>
          <option value="a-z">Alfabeticamente A-Z</option>
          <option value="z-a">alfabeticamente Z-A</option>
        
          </select>
          <input type="submit" value="Ordenar.." 
                       onClick={()=>OnclickOrdenar()}/>
          </p>
        </form>





        </div>

<div className="enfila">

<form onSubmit={(e) => {
                     e.preventDefault();
                    }}>
                         <p>Ordenar Pokemones por..
        <select name='orden'  >
         
          <option value="fuerzaAsc">Por Fuerza de menor a mayor</option>
          <option value="fuerzaDesc">Por Fuerza de mayor amenor</option>
      
         
  </select>
 </p>
      </form>

</div>
 
        </div>              


      
      
       

             



  );
}

/*  <div className="enfila" > 
                <form onSubmit={(e) => {
                     e.preventDefault();
                     }}>
                         <p>Buscar Pokemones por tipo
                                <select name='Buscar Pokemones'>
                      
                          <option>Trekking</option>
                          <option>Kite Surf</option>
                    
                                                 
                        </select>
                         <input type="submit" value="filtrar Pokemones" 
                         onClick={()=>OnclickFiltrarActividad()}
                          />
                         </p>
                   </form>

              </div>
              */