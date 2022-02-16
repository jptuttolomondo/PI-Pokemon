import React  from 'react'
//import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
//import { countriesByName, getAllCountries } from '../../actions/actions';
import "./navBarLanding.css"
export const NavBarLanding = ({setCurrentPage}) => {

   
    return (
        <React.Fragment>
      <nav>
            <ul className='barracompleta'>
             <li className='enlinea'><NavLink to= {'/home' }>Ingresar</NavLink></li>
             </ul>
            </nav>
          </React.Fragment>
    )
}

/*<li className='enlinea'><NavLink to= {'/Home'}>buscar informacion de paises</NavLink></li>
  <li className='enlinea'><NavLink to= {'/:id'}>informacion de un pais</NavLink></li>*/