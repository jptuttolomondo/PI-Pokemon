import React  from 'react'
//import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import "./navBar.css"

//import { countriesByName, getAllCountries } from '../../actions/actions';
export const NavBar = ({setCurrentPage}) => {

   
    return (
        <React.Fragment>
      <nav>
            <ul className='barra'>
           
                <li className='enlinea' ><NavLink to= {'/home'}>buscar pokemones</NavLink></li>
                <li className='enlinea'><NavLink to= {'/tipos' }>Agregar tipos a pokemones</NavLink></li>
                <li className='enlinea'><NavLink to= {'/:id'}>pokemones por id</NavLink></li>
                <li className='enlinea'><NavLink to= {'/'}>Volver a LandPage</NavLink></li>

            </ul>

         </nav>
          
          
        </React.Fragment>
    )
}


/*
    return (
        <React.Fragment>
      <nav>
            <ul className='barracompleta'>
             <li className='enlinea'><NavLink to= {'/home' }>Ingresar</NavLink></li>
             </ul>
            </nav>
          </React.Fragment>
    )
}*/