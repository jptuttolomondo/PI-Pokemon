import React from "react";
//import { useState } from "react";
//import { useDispatch} from 'react-redux';
//import { useEffect } from "react";
import "./searchBar.css"
//import { OrderBy,orderBy } from "../Orden";
// import {PaisesPorNombre,
//   CargarPaises,
//   OrdenarPorLetraAsc,
//   filtroPorContinente,
//    OrdenarPorLetraDesc,
//   FiltrarPorActividad,
//   OrdenarPorPoblacionAsc,
//   OrdenarPorPoblacionDesc,
// } from "../../actions/actions";



export default function SearchBar({onSearch}) {

// const [country, setCountry] = useState(""); //
// const [region, setRegion] = useState("");

//filtros

// const [orden, setOrden] = useState(""); 

// const dispatch = useDispatch();

// const [currentPage,setCurrentPage]=useState(0)

 const OnclickOrdenar=(e)=>{

//    setOrden(e);
// console.log(e)

//  if (e === "all") dispatch(CargarPaises());
// if (e === "a-z") dispatch(OrdenarPorLetraAsc());
// if (e=== "z-a") dispatch(OrdenarPorLetraDesc());
//  if (e === "Asc poblacion") dispatch(OrdenarPorPoblacionAsc());
//  if (e === "Desc poblacion") dispatch(OrdenarPorPoblacionDesc());
 
  }


  const OnclickContinent = (e) => {
//    dispatch(filtroPorContinente(region))
   };
  
   function onClickHandler() {
//     if(!country){
//       return alert('Ingresar el nombre de un país')}
//     dispatch(filtroPorContinente())
//     dispatch(PaisesPorNombre(country));
   }





 const OnclickFiltrarActividad=(e)=>{

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
                         value=''//{country}
                           // onChange={//e => setCountry(e.target.value)}
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
                        <select name='continente' /*onChange={(e) => setRegion(e.target.value)}*/  >
                        <option value="all">All</option>
                          <option value="America">America</option>
                          <option value="Africa">Africa</option>
                          <option value="Europe">Europe</option>
                          <option value="Asia">Asia</option>
                          <option value="Oceania">Oceania</option>
                                                  
                        </select>
                     
                          <input type="submit" value="Buscar.." 
                       onClick={()=>OnclickContinent()}/>
                  </p>
                </form>
                </div>
            <div className="enfila" > 
                <form onSubmit={(e) => {
                     e.preventDefault();
                     }}>
                         <p>Buscar Pokemones por tipo
                                <select name='Buscar Pokemones'>
                      
                          <option>Trekking</option>
                          <option>Kite Surf</option>
                          <option>Paseos en Barco</option>
                          <option>Excursiones</option>
                          <option>Excursiones de pesca</option>
                          <option>SandBoard</option>
                          <option>Esqui de nieve</option>
                          <option>Esqui Acuatico</option>
                          <option>Parapente</option>
                          <option>Canopy</option>
                                                 
                        </select>
                         <input type="submit" value="filtrar Pokemones" 
                         onClick={()=>OnclickFiltrarActividad()}
                          />
                         </p>
                   </form>

              </div>

              <div className="enfila"> 
                <form onSubmit={(e) => {
                     e.preventDefault();
                    }}>
                         <p>Ordenar Pokemones por..
        <select name='orden' onChange={(e) => { OnclickOrdenar(e.target.value)}} >
          <option value="all">-</option>
          <option value="a-z">Alfabeticamente A-Z</option>
          <option value="z-a">alfabeticamente Z-A</option>
          <option value="Asc poblacion">↑ tipo de menor a mayor</option>
          <option value="Desc poblacion">↓ tipo de mayor a menor</option>
        </select>
      
        </p>
                   </form>

              </div>

      </div>

  );
}


