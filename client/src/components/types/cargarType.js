import React from "react";

export const CargarType=()=>{


return(

<div>
      

        <div className="enfila">     


<form onSubmit={(e) => {
e.preventDefault();
                 
  }}>

<p> Seleccionar tipo....
   <select name='Tipo'   >
   <option value="all">All</option>
     <option value="water">water</option>
     <option value="poison">poison</option>
     <option value="bug">bug</option>
     <option value="flying">flying</option>
     <option value="normal">normal</option>
     <option value="shadow">shadow</option>
     <option value="fighting">fighting</option>
     <option value="ground">ground</option>
     <option value="rock">rock</option>
     <option value="ghost">ghost</option>
     <option value="steel">steel</option>
     <option value="fire">fire</option>
     <option value="grass">grass</option>
     <option value= "electric">electric</option>
     <option value="psychic">psychic</option>
     <option value="ice">ice</option>
     <option value="dragon">dragon</option>
     <option value="dark">dark</option>
     <option value="fairy">fairy</option>
     <option value="unknown">unknown</option>

   </select>

     <input type="submit" value="Agregar tipo.." 
 />
</p>
</form>
</div>



</div>



)



}
