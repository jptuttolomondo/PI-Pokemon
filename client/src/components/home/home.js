 import React from 'react'
 import { useDispatch,useSelector} from 'react-redux'
import { NavBar } from '../../redux/ui/navBar'
import {PokeCards} from '../pokemons/pokeCards'
import SearchBar from '../../redux/ui/searchBar'
import "./home.css"
import { BuscarPokemones } from '../pokemons/BuscarPokemones'
import { OrdenarPorLetraAsc } from '../../redux/actions/actions'
import { OrdenarPorLetraDesc } from '../../redux/actions/actions'

export const Home = () => {  
    const resultadoBusqueda = useSelector((state) => state.pokemonBuscado);
    const ordenarAsc = useSelector((state) => state.copiaDePokemones);
    const ordenarDesc = useSelector((state) => state.copiaDePokemones);
  
    return ( 
          <div >
                  <NavBar />
                  <SearchBar  />
               
           {!resultadoBusqueda.length&& !ordenarAsc&& !ordenarDesc?  <PokeCards />  
                                                  : resultadoBusqueda? <BuscarPokemones/>
               
                                  :ordenarAsc?<OrdenarPorLetraAsc/>
                                  :<OrdenarPorLetraDesc/>
               }
                 
          </div>
      
    )
}

/*  {/*!ordenarAsc.length? <PokeCards/>
                :   <OrdenarPorLetraAsc/>
               }
             {/*!ordenarDesc.length? <PokeCards/>
                :   <OrdenarPorLetraDesc/>
               }
               //*/

               /*   {!resultadoBusqueda.length? 
               <PokeCards />  
               : <BuscarPokemones/>}*/