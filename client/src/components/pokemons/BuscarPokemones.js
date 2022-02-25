import React,{useEffect,useState,useParams} from "react";
//import { PokemonesPorNombre } from "../../redux/actions/actions";
import { useSelector,useDispatch } from "react-redux";
import'./BuscarPokemones.css'

export const BuscarPokemones=()=> {
   const actualState = useSelector((state) => state.pokemonBuscado);
//   console.log(actualState)
  return(

        <div className="pokeDetail" > 
         {actualState.length?
         <div>
        <div className="info" >
              <h1 >Detalle  de Pokemon</h1>
            <img src ={actualState[0].sprites} width="150" height="100" alt='imagen'/>
             <h4>Nombre: {actualState[0].name}</h4>
            <h4>ID de Pokemon: {actualState[0].id}</h4>
            <h3>hp: {actualState[0].hp}</h3> 
            <h3>attack :{actualState[0].attack}</h3>
            <h3>defense: {actualState[0].defense}</h3>
            <h3>speed: {actualState[0].speed}</h3>
            <h3>height: {actualState[0].height}</h3>
            <h3>weight: {actualState[0].weight}</h3>
             <a href='/type'><button >Agregar tipos al pokemon {actualState[0].name}</button></a>
            <a href='/home'><button >Volver a lista de Pokemones</button></a>
        </div>
       
  </div>
    :
    <div> Poekemon no encontrado </div>

        }
       
 </div>   
 )



}