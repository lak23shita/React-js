//Inline styling which is done using an object and we are assigning a value to it
import React from "react"
import './myStyles.css';


 
function Inline(){
    const heading={
        fontSize:'70px',
        color:"blue"
    }
return(
            
            <div>
                <h1 className='error'>Error</h1>
                <h1 style={heading}>Inline</h1>
                <button style={{backgroundColor:"red"}}></button>
            </div>
        )

}

export default Inline;