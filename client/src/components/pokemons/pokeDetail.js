import React, { useEffect,useState} from 'react'
import {useParams } from 'react-router-dom'
//import { NavLink } from 'react-router-dom'
import { PokemonsById } from '../../redux/actions/actions'
import { useSelector,useDispatch} from 'react-redux'
import "./pokeDetail.css"


export const PokemonsDetail = () => {
 //al id hay que agregarle _api !!!


  const { id} = useParams();
  let idApi=id+'_api'

  const infoPoke = useSelector((state) => state.copiaDePokemonesInicial);

   const infoPokeDetail = useSelector((state) => state.detalleDePokemones);
//       //const aux=infopais.actividads[0].nombre
//     //  console.log(aux)
//const [currentPage, setCurrentPage] = useState(0);
 const dispatch=useDispatch()
   useEffect(() => {
      dispatch( PokemonsById(idApi))
  }, [idApi]);

    return (
        <div className="pokeDetail" > 
         
      <div className="imagen" ></div>
      <div className="info" >
          <h1 >Detalle  de Pokemon</h1>

          <img src ={infoPokeDetail.sprites} width="150" height="100" alt='imagen'/>
          <h3>Nombre: {infoPokeDetail.name}</h3>
          <div className='detail'>
      <h5>ID de Pokemon: {infoPokeDetail.id}</h5>
        <h5>hp: {infoPokeDetail.hp}</h5> 
        <h5>attack :{infoPokeDetail.attack}</h5>
        <h5>defense: {infoPokeDetail.defense}</h5>
        <h5>speed: {infoPokeDetail.speed}</h5>
        <h5>height: {infoPokeDetail.height}</h5>
        <h5>weight: {infoPokeDetail.weight}</h5>


          </div>
  
  


                     
  <a href='/type'><button >Agregar tipos al pokemon {infoPokeDetail.name}</button></a>
           <a href="/home"><button >Volver a lista de Pokemones</button></a>
         </div>
          
     </div>
    )

 }
