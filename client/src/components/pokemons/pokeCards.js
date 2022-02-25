import React from "react";
import { useState,useEffect } from "react";
import {useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { CargarPokemones } from "../../redux/actions/actions";
import "./pokeCards.css";


 export const PokeCards=({onClose})=>{
  
    const pokemones= useSelector((state) => state.pokemonesInicial);
  const [currentPage, setCurrentPage] = useState(0);
const actualState=pokemones.length?pokemones:pokemones


//     const paisfiltrado= useSelector((state)=>state.detallePaisInicial)
//     const filtro=useSelector((state)=>state.copiaDePaises)
// const continente=useSelector((state)=>state.paisesActivos)

// const actualState=paisfiltrado.length<=0 &&continente.length<=0&&continente.length<=0 ? countries
//              : continente;
                                     
// const actualState=paisfiltrado.length<=0 &&continente.length<=0 ? countries
//                 : continente.length>0?continente
//                                      : paisfiltrado

  
const dispatch=useDispatch()
useEffect(()=>{
dispatch(CargarPokemones())},[dispatch],actualState
)


    let nextPage = () => {
        if (actualState.length <= currentPage + 12) {
          setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 12);
      };
      let prevPage = () => {
        if (currentPage < 10) {
          setCurrentPage(0);
        } else {

          setCurrentPage(currentPage - 12);
        }
      };

      const firstPage = () => {
        
       setCurrentPage(0);
      };
    
      const lastPage = () => {
   
        setCurrentPage(actualState.length - 12);
         console.log(currentPage);
      };
   const paginado = actualState.slice(currentPage, currentPage +12)
             
    
    return (
<div>   
<div className="cards"> 
         <button onClick={firstPage}>  {'<<Primera Pagina'}  </button>
        <button onClick ={prevPage}>  {'<Anterior'}   </button>
          <button onClick={nextPage}>  {'>Siguiente'}   </button>
        <button onClick={lastPage}>  {'>> Ultimo'}</button>
     </div>
     <div className="containerCard">

{
 paginado.map (e=>(  //ver si solo son uno o dos tipos o hay que usar map para mostra
 <div className="pokecards" key={e.id}>  
      <h3>Pokemon: {e.name}</h3> 
        <h4>ID: {e.id} </h4>
     
        <h4>Type:  {e.type[0]}<p>{e.type[1]}</p>
        </h4>
         <NavLink to={`/pokemonsDetail/${e.id}`}>  < img src= {e.sprites} width="200" height="150" alt="imagen"/></NavLink> 
        
     </div> ))
     }

</div> 
</div>
    )
}


/*<div className="cards"> 
         <button onClick={firstPage}>  {'<<Primera Pagina'}  </button>
        <button onClick={prevPage} >  {'<Anterior'}   </button>
        <button onClick={nextPage} >  {'>Siguiente'}   </button>
        <button onClick={lastPage} >  {'>> Ultimo'}</button>
     </div>
     <div className="containerCard">

       { currentPage===0 ? 
       
       filteredCFirst.map (e=>(

       <div className="paiscards" key={e.id}> 
             
            <div>    
          <h3>Pais: {e.nombre}</h3> 
          <h4>Continente:  {e.continente}</h4>
          </div>
          <div> 
          <NavLink to={`/${e.id}`}>< img src= {e.bandera} width="150" height="100" alt="bandera"/>   </NavLink> 
        </div>
      </div>
                              ))
        :filteredC.map (e=>(
        <div className="paiscards"key={e.id}> 
            
              <h3>Nombre de Pokemon: {e.name}</h3> 
               <h4>Tipo:  {e.type}</h4>
               <NavLink to={`/${e.id}`}>< img src= {e.bandera} width="150" height="100" alt="bandera"/>   </NavLink> 
            </div> ))
            }

     </div>*/