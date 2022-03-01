import React,{useEffect,useState,useParams} from "react";
import { OrdenarPorLetraAsc } from "../../redux/actions/actions";
import { useSelector,useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import'./PokemonSort.css'




 export default function PokemonSort(){
  
    const pokemones= useSelector((state) => state.pokemonOrdenado);
  const [currentPage, setCurrentPage] = useState(0);
  //console.log('ingresado a pokemonsort',pokemonOrdenado)
  setCurrentPage(0)
const actualState=pokemones.length?pokemones:pokemones

  
const dispatch=useDispatch()
//verificar la eliminacion de useeffect()
// useEffect(()=>{
// dispatch(OrdenarPorNombre())},[dispatch],actualState
// )


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


/*<form onSubmit={(e) => {
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
                     
                     </form>*/

