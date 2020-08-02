
//css styling along with react
import React from "react"
import './myStyles.css';
//in this we are taking a map method to assign the names list to map function which containes parameter followed by arrow than the function we want to return

function Stylesheet(props){
    //in this styling is applied in myStyles.css with the class primary are are using conditionally that function 
    let className=props.primary ? 'primary': ''
return(
            
            <div>

                {/* we are using template litrals for multiline strings */}
                <h1 className={`${className} myfont`}>Lakshita</h1>
            </div>
        )

}

export default Stylesheet;