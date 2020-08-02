//functional component
import React from "react";

//props is the functional component

 function  FunctionClick (){

    
     function clickHandler(){
            console.log('Button clicked')
        }
    
     
     
     
     
    return(
         <div>
             {/* //inside the curly braces the eventhandler is defined */}
             {/* //clickHandler is the eventhandler so we dont write clickHandler() becoz this is the function call rather we have to use the function on being clicked so we dont put the parenthis */}
         <button onClick={clickHandler}>Click</button>
         </div>
         
     )
 }
    
  


export default FunctionClick