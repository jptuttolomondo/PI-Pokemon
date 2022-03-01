import React, { useEffect } from "react"
import { useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import{guardarPokeCreado,TodosTipos} from "../../redux/actions/actions"


import "./crearPokemon.css"






// const nombreValido=(e)=>{
    
//     for(let i=0; i<e.length;i++){
//         if (e.name[i].isdigit())return false
//     }
//     return true
// }
// function validate(input){

//     let error={}
//     if(!input.name&&nombreValido(input.name) )error.name='debe ingresar un nombre solo caracteres'
//     else if(!input.attack) error.attack='debe ingresar un numero valido de attack'
//     else if(!input.defense) error.defense='debe ingresar un numero valido de defense'
//     else if(!input.hp&&input.hp<0)error.hp='debe ingresar un numero mayor que 0'
//                 else if(!input.speed)error.speed='debe ingresar un numero valido de speed'
//                     else if(!input.height)error.height='debe ingresar un numero valido de height'
//                          else if(!input.weight)error.weight='debe ingresar un numero valido de weight'
//                          else if(!input.image)error.image='debe ingresar una url valida'
//     }



 
        

export default function CrearPokemon(){


    const dispatch=useDispatch()

const nuevoPokemon=useSelector((state)=>state.pokemonGuardado)

    const [input,setInput]=useState(""
    )

// hp:"",
// attack:"",
// defense:"",
// speed:"",
// height:"",
// weight:"",
// image:"",
// type:[],
    //})

//const [error, setError]=useState({})



// useEffect(()=>{
//   dispatch(TodosTipos(),[])  
// })



function onClickHandler(){
  //falta la validacion de datos!!!!
  //dispatch(guardarPokeCreado())
  }
function onClick(){

}


    return (

<div className="info">
        

<form onSubmit={(e) => {
                     e.preventDefault();
                     }}>
 <div>

        <div><h3>Crear Nuevo Pokemon</h3> </div>

        <div>
            <label>Nombre: </label>    
       
            <input
            type="text"
            name="name"
            placeholder="solo numeros"
            value= {input}
            onChange={()=>onClick(e => setInput(e.target.value))}
            
            />
        
            <p></p>

            </div>





 </div>

</form>
</div>

    )

}


/*
<div className="info">

        <form onSubmit={(e) => {
                     e.preventDefault();
                     }}>

        <div>
                   <div><h3>Crear Nuevo Pokemon</h3>
                    </div> 
          <div>
            <label>Nombre: </label>    
       
          
            <input
    
            type="number"
            name="name"
            placeholder="solo letras"
            value={input.name}
            
            onChange={()=>onClick(e => setInput(e.target.value))}
            />
        
            <p></p>

            </div>
     
        </div>
         <div>
        <label>Vida: </label>
        <input
            type="number"
            name="hp"
            placeholder="solo numeros"
            value={input.hp}
            onChange={()=>onClick(e => setInput(e.target.value))}
            
            />
            
              <p></p>
              </div>
        <div>
        <label>Attack: </label>
             <input
     
            type="number"
            name="attack"
        placeholder="solo numeros"
                value={input.attack}
                onChange={()=>onClick()}
 
        />
     
        <p></p>
        </div>
       
      

        <div>
        <label>Defense: </label>
        <input
        type="number"
        name="defense"
        placeholder="solo numeros"
        value={input.defense}
        onChange={()=>onClick()}
       
        />
        <p></p>
        </div>
     

        <div>
        <label>Image: </label>
        <input
        type="number"
        name="height"
        placeholder="solo numeros"
        value={input.image}
        onChange={()=>onClick()}
     
        />
       
        <p></p>
        </div>
        <div>
        <label>Speed : </label>
        <input
        type="number"
        name="speed"
        placeholder="solo numeros"
        value={input.speed}
        onChange={()=>onClick()}

        />

        <p></p>
        </div>


        <div>
        <label>Height: </label>
        <input
        type="number"
        name="height"
        placeholder="solo numeros"
        value={input.height}
        onChange={()=>onClick()}
       
        />
         
        <p></p>
        </div>
        <div>
        <label>Weight: </label>
        <input
        type="number"
        name="weight"
        placeholder="solo numeros"
        value={input.weight}
        onChange={()=>onClick()}
  
        />
  
        <p></p>
     
        </div> 
                
        <div>
        <label>seleccionar tipos, maximo dos : </label>

          <input
        type="checkbox"
        name="type"
        placeholder="solo numeros"
        value={input.type}
        
        onChange={()=>onClick()}
        />
  </div>
    
        </form>
        <input type="submit" value="Crear Pokemon"

 
        onClick={()=>onClickHandler()}/>
     <a href='/home'><button >Volver a lista de Pokemones</button></a>
        <p></p>

 

</div>*/
