//functional component
import React from "react";

//props is the functional component
//in this we have destructured the name attribute as we have'nt provided the props method
 

const Greet = (props) =>{
    const {name}=props
    return(
        <div>
        <p>Hey {name}</p>
        {/* we have done this to render the <p>written in the navbar tag */}
        {props.children}
        </div>
        
    )
}

export default Greet