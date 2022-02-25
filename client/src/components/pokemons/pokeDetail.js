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
          <h4>Nombre: {infoPokeDetail.name}</h4>
        <h4>ID de Pokemon: {infoPokeDetail.id}</h4>
        <h3>hp: {infoPokeDetail.hp}</h3> 
        <h3>attack :{infoPokeDetail.attack}</h3>
        <h3>defense: {infoPokeDetail.defense}</h3>
        <h3>speed: {infoPokeDetail.speed}</h3>
        <h3>height: {infoPokeDetail.height}</h3>
        <h3>weight: {infoPokeDetail.weight}</h3>
  


                     
  <a href='/type'><button >Agregar tipos al pokemon {infoPoke.name}</button></a>
           <a href='/home'><button >Volver a lista de Pokemones</button></a>
         </div>
          
     </div>
    )

 }
