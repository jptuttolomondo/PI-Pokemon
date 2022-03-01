import React,{useEffect,useState,useParams} from "react";
//import { PokemonesPorNombre } from "../../redux/actions/actions";
import { useSelector,useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import'./filtrarPokemones.css'

export const FiltrarPokemones=()=> {
   const actualState = useSelector((state) => state.pokemonFiltrado);

   const [currentPage, setCurrentPage] = useState(0);

  //console.log(actualState)

const paginado = actualState.slice(currentPage, currentPage +12)

  return(

        <div className="containerCard" > 

         { actualState.length?


    paginado.map (e=>(  //ver si solo son uno o dos tipos o hay que usar map para mostra
    <div className="pokecards" key={e.id}>  
         <h3>Pokemon: {e.name}</h3> 
           <h4>ID: {e.id} </h4>
        
           <h4>Type:  {e.type[0]}<p>{e.type[1]}</p>
           </h4>
            <NavLink to={`/pokemonsDetail/${e.id}`}>  < img src= {e.sprites} width="200" height="150" alt="imagen"/></NavLink> 
            <a href='/type'><button >Agregar tipos al pokemon {e.name}</button></a>
            <a href='/home'><button >Volver a lista de Pokemones</button></a>
        </div> ))
 
    :
    <div> Poekemon no encontrado </div>

        }
       
 </div>   
 )



}