import React from 'react'
 //import { useDispatch} from 'react-redux'
//import { CargarPaises} from '../../actions/actions'
import { NavBar } from '../../redux/ui/navBar'
//import {PaisCards}from '../countries/PaisCards'
import SearchBar from '../../redux/ui/searchBar'
import "./home.css"

export const Home = () => {  

   //const dispatch = useDispatch();

    //   useEffect(() => {
    //     dispatch(CargarPaises());
    //   }, [dispatch]);

    return ( 
          <div >
                  <NavBar />
                  <SearchBar  />
          </div>
      
    )
}

/*   <PaisCards/>   entre los divs*/
/*<div className='head' >   
                  <div className='home'>
                  
                       
                        <div > 
   
      
                         </div>
                  </div>

               </div>*/