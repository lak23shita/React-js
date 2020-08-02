import React from "react";

//memo
//parent.js

 function  Memo ({name}){     
     console.log('rendering memo comp')
    return(
         <div>
           {name}
         </div>
         
     )
 }
    
  

{/* memo is used for the functional component as it helps that the child do not rerender when the parent is re rendered after every 2 sec */}
export default React.memo(Memo);