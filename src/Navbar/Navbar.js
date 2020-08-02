//functional component
import React from "react";

//props is the functional component

 const Navbar = (props) =>{
    return(
        <div>
        <p>Hey {props.name}</p>
        {/* we have done this to render the <p>written in the navbar tag */}
        {props.children}
        </div>
        
    )
}

export default Navbar