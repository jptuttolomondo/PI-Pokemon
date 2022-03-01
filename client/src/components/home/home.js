 import React from 'react'
 import { useDispatch,useSelector} from 'react-redux'
import { NavBar } from '../../redux/ui/navBar'
import {PokeCards} from '../pokemons/pokeCards'
import SearchBar from '../../redux/ui/searchBar'
import "./home.css"
import { BuscarPokemones } from '../pokemons/BuscarPokemones'
import { FiltrarPokemones } from '../pokemons/filtrarPokemones'
import PokemonSort from '../pokemons/PokemonSort'


export const Home = () => {  
    const resultadoBusqueda = useSelector((state) => state.pokemonBuscado);
    const ordenado = useSelector((state) => state.pokemonOrdenado);
    //console.log('ordenado:',ordenado)

    const filtrado=useSelector((state)=>state.pokemonFiltrado)
 
    return ( 
          <div >
                  <NavBar />
                  <SearchBar  />
               
           {(filtrado.length<=0 &&resultadoBusqueda.length<=0)?  <PokeCards /> 
            :filtrado.length>0? <FiltrarPokemones /> 
                                :resultadoBusqueda.length>0? <BuscarPokemones/>
                                
                                :ordenado?<PokemonSort/>
                                                                  
                                                                                :<PokeCards />   
                                
               }
                 
          </div>
      
    )
}

